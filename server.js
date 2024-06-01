const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const url = process.env.URL;
const dbName = "WorkZen";


async function connectToDatabase() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log("Connected to the database");
    return client.db(dbName);
  } catch (err) {
    console.error("Error connecting to the database", err);
    throw err;
  }
}

app.use(cors());

app.use(express.json());


app.get("/favorites/:deviceId", async (req, res) => {
  const deviceId = req.params.deviceId;
  try {
    const db = await connectToDatabase();
    const favoritesCollection = db.collection("favorites");
    const favorites = await favoritesCollection.findOne({ deviceId });
    res.json({ favorites: favorites ? favorites.favorites : [] });
  } catch (err) {
    console.error("Error retrieving favorites", err);
    res.status(500).json({ message: "Error retrieving favorites" });
  }
});


app.post("/favorites/:deviceId", async (req, res) => {
  const deviceId = req.params.deviceId;
  const favorite = req.body.favorite;
  try {
    const db = await connectToDatabase();
    const favoritesCollection = db.collection("favorites");
    const result = await favoritesCollection.updateOne(
      { deviceId },
      { $addToSet: { favorites: favorite } },
      { upsert: true }
    );
    res.json({ message: "Favorite added successfully" });
  } catch (err) {
    console.error("Error adding favorite", err);
    res.status(500).json({ message: "Error adding favorite" });
  }
});


app.delete("/favorites/:deviceId/:favorite", async (req, res) => {
  const deviceId = req.params.deviceId;
  const favoriteToRemove = req.params.favorite;
  try {
    const db = await connectToDatabase();
    const favoritesCollection = db.collection("favorites");
    const result = await favoritesCollection.updateOne(
      { deviceId },
      { $pull: { favorites: favoriteToRemove } }
    );
    res.json({ message: "Favorite removed successfully" });
  } catch (err) {
    console.error("Error removing favorite", err);
    res.status(500).json({ message: "Error removing favorite" });
  }
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
