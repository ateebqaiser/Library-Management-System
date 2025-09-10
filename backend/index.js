import express from 'express'
import cors from 'cors'
import bookRoutes from './routes/book.js'



const app = express()
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Server Running")
})

app.use('/book',bookRoutes)


export default app

// const port = 4000
// app.listen(port)



