const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const url = process.env.URL;
const dbName = "Favorites";

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

connectToDatabase();

app.use(express.json());

app.get("/api/favorites", async (req, res) => {
  try {
    const favoritesCollection = client.db(dbName).collection("favorites");
    const favorites = await favoritesCollection.find({}).toArray();
    res.json(favorites);
  } catch (err) {
    console.error("Error fetching favorites:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/favorites", async (req, res) => {
  try {
    const newFavorite = req.body;
    const favoritesCollection = client.db(dbName).collection("favorites");
    await favoritesCollection.insertOne(newFavorite);
    res.status(201).json(newFavorite);
  } catch (err) {
    console.error("Error adding favorite:", err);
    res.status(400).json({ message: "Bad Request" });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
