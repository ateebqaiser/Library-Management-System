import express from 'express'
import cors from 'cors'
import {viewBook} from './mongoose.js'

const app = express()
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Server Running")
})

app.get('/book',async(req,res)=>{
    res.send(await viewBook())
})



const port = 4000
app.listen(port)

