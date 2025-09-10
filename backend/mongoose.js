import mongoose from "mongoose";
import {book_collection} from "./models/bookSchema.js";

const uri = "mongodb://localhost:27017/Library" 
mongoose.connect(uri)
console.log("Mongo db connected successfully")

export async function viewBook(){
    const bookfind=await book_collection.find()
    return bookfind
}

export async function createBook(json){
    await book_collection.create(
        {
            author:json.author,
            title:json.title,
            year:json.year
        }
    )
}

export async function updateBook(id,json){
    await book_collection.updateOne(
        {
            _id:id
        },
        {
            author:json.author,
            title:json.title,
            year:json.year
        }
    )
}

export async function deleteBook(id){
    await book_collection.deleteOne(
        {
            _id:id
        }
    )
}