import express from 'express'
import cors from 'cors'
import {viewBook,updateBook,deleteBook,createBook} from './mongoose.js'


const app = express()
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Server Running")
})

app.get('/book',async(req,res)=>{
    res.send(await viewBook())
})

app.post('/book',async(req,res)=>{
    const json = req.body
    res.send(await createBook(json))
})

app.put('/book/:id',async(req,res)=>{
    const json = req.body
    const id = req.params.id
    res.send(await updateBook(id,json))
})

app.delete('/book/:id',async(req,res)=>{
    const id = req.params.id
    res.send(await deleteBook(id))
})

const port = 4000
app.listen(port)

