import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Navigation.css'
export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
        <nav className="nav">
            <Link className='home' to="/index">Js</Link>
            <div className='menu' onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li><NavLink onClick={handleClick} to="/teams">Equipos</NavLink></li>
                <li><NavLink onClick={handleClick} to="/tournaments">Torneos</NavLink></li>
                <li><NavLink onClick={handleClick} to="/about">Mas</NavLink></li>
            </ul>
        </nav>
  )
}
