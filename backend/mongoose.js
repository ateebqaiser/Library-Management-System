import mongoose from "mongoose";
import {book_collection} from "./models/bookSchema.js";

const uri = "mongodb://localhost:27017/Library" 
mongoose.connect(uri)
console.log("Mongo db connected successfully")

export async function viewBook(){
    const bookfind=await book_collection.find()
    return bookfind
}