import {viewBook,updateBook,deleteBook,createBook} from '../mongoose.js'
import express from 'express'

const router=express.Router()


router.get('/',async(req,res)=>{
    res.send({name:"ateeb"})
    // res.send(await viewBook())
})

router.post('/',async(req,res)=>{
    const json = req.body
    res.send(await createBook(json))
})

router.put('/:id',async(req,res)=>{
    const json = req.body
    const id = req.params.id
    res.send(await updateBook(id,json))
})

router.delete('/:id',async(req,res)=>{
    const id = req.params.id
    res.send(await deleteBook(id))
})

export default router