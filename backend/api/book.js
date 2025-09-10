import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { book_collection } from "../models/bookSchema.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
const uri = "mongodb+srv://ateebqaiser243_db_user:ateeb1234qaiser@library.ku8bhik.mongodb.net/Library?retryWrites=true&w=majority&appName=Library";
if (!mongoose.connection.readyState) {
  await mongoose.connect(uri);
  console.log("MongoDB Connected ✅");
}

// ✅ View all books
app.get("/api/book", async (req, res) => {
  try {
    const books = await book_collection.find();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Create book
app.post("/api/book", async (req, res) => {
  try {
    const book = await book_collection.create(req.body);
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Update book
app.put("/api/book/:id", async (req, res) => {
  try {
    const book = await book_collection.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Delete book
app.delete("/api/book/:id", async (req, res) => {
  try {
    await book_collection.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default app;
