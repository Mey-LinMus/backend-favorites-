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

app.get("/favorites/:deviceId", async (req, res) => {
  const deviceId = req.params.deviceId;

  try {
    const db = await connectToDatabase();
    const favoritesCollection = db.collection("favorites");

    const favorite = await favoritesCollection.findOne({ deviceId });

    if (!favorite) {
      res.status(404).json({ message: "Favorite combination not found" });
      return;
    }

    res.json(favorite);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching favorite combination" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
