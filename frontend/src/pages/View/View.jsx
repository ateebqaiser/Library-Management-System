import React, { useState, useEffect } from 'react'


const ViewPage = () => {
  const [id, setId] = useState("");
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const url="https://library-management-system-9n1s.vercel.app/book"
  // const url="http://localhost:4000/book"

  // fetch all books
  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const res = await fetch(url);
    const json = await res.json();
    setBooks(json);
    console.log(json)
  }

  // add book
  async function handleAdd() {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author })
    });
    await fetchBooks();
    resetForm();
  }

  // fill inputs when editing
  function handleEdit(id, title, author) {
    setId(id);
    setTitle(title);
    setAuthor(author);
  }

  // update book
  async function handleUpdate() {
    if (!id) return; // no book selected
    await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author })
    });
    await fetchBooks();
    resetForm();
  }

  // delete book
  async function handleDelete() {
    if (!id) return;
    await fetch(`${url}/${id}`, {
      method: "DELETE"
    });
    await fetchBooks();
    resetForm();
  }

  // reset form
  function resetForm() {
    setId("");
    setTitle("");
    setAuthor("");
  }

  return (
    <>
      <div className='View-books'>
        {books.map((book) =>
          <div className='bookCard' key={book._id}>
            <p>Author: {book.author}</p>
            <h1>{book.title}</h1>
            <button onClick={() => handleEdit(book._id, book.title, book.author)}>Edit</button>
          </div>
        )}
      </div>

      <div className="form">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <button onClick={handleAdd}>Add</button>
      {id && (
        <>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </>
  )
}

export default ViewPage