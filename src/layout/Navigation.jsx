import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Navigation.css'
export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  console.log(menuOpen)

  return (
        <nav className="nav">
            <Link className='home' to="/index">Js</Link>
            <div className='menu' onClick={() => { setMenuOpen(!menuOpen) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li><NavLink to="/teams">Equipos</NavLink></li>
                <li><NavLink to="/tournaments">Torneos</NavLink></li>
                <li><NavLink to="/about">Mas</NavLink></li>
            </ul>
        </nav>
  )
}
