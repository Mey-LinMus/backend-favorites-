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
