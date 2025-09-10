import React from 'react'

const Bookfind = ({book}) => {
  return (
    <>
        <div className='bookCard'>
            <h1>Title: {book.title}</h1>
            <h2>Author: {book.author}</h2>
            <h2>year: {book.year}</h2>
        </div>
    </>
  )
}

export default Bookfind