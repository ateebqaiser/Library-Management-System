import React from 'react'
import { useEffect,useState } from 'react'
import Bookfind from './Bookfind.jsx'

const ViewPage = () => {

    const [book,setBook]=useState(
        [{author:"",title:"",year:""}]
    )

    useEffect(()=>{
        async function viewBooks(){
            const res = await fetch("http://localhost:4000/book")
            const json=  await res.json()
            setBook(json)
        }
        viewBooks()
    },[])


  return (
    <>
        <div className='View-books'>
            {book.map((b)=>
               <Bookfind book={b}> </Bookfind>
            )}
        </div> 
    </>
  )
}

export default ViewPage


