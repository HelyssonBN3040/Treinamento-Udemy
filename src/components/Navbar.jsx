import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul style={{display:"flex", justifyContent:"center", gap:10, textDecoration:"none", listStyleType:"none"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/form">Formulario</Link></li>
                <li><Link to="/api">Api</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar