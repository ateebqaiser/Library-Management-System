import React from 'react'
import './NavBar_style.css'
import { Barcontent } from '../../data.js'

const NavBar = () => {
  return (
    <>
        <nav className='navBar-style'>
            {Barcontent.map((content,id)=>
                <li key={id}><a href={content.Link}>{content.title}</a></li>
            )}
        </nav>
    </>
  )
}

export default NavBar