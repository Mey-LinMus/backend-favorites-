const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const url = process.env.URL;
const dbName = "Favorites";
