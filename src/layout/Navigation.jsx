import { NavLink } from 'react-router-dom'
export const Navigation = () => {
  return (
    <>
        <nav className="nav">
            <ul>
                <li><NavLink to="/index">Inicio</NavLink></li>
                <li><NavLink to="/teams">Equipos</NavLink></li>
                <li><NavLink to="/tournaments">Torneos</NavLink></li>
                <li><NavLink to="/about">Acerca de</NavLink></li>
            </ul>
        </nav>
    </>
  )
}
