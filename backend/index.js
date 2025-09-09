import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Server Running")
})

const port = 3000
app.listen(port)

