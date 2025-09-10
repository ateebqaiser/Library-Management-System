import React from 'react'
import './NavBar_style.css'
import { Barcontent } from '../../data'

const NavBar = () => {
  return (
    <>
        <nav className='navBar-style'>
        <li>
            {Barcontent.map((content)=>
                <li><a href={content.Link}>{content.title}</a></li>
            )}
        </li>
        </nav>
    </>
  )
}

export default NavBar