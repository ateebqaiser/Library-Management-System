import mongoose from "mongoose"

const book_schemaCreation=new mongoose.Schema(
    {
        author:String,
        title:String,
        year:Number
    },
    {versionKey:false}
)

export const book_collection=mongoose.model("Book",book_schemaCreation)
 