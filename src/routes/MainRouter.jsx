import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from '../layout/Header'
import { Navigation } from '../layout/Navigation'
import { Index } from '../components/pages/Index'
import { Teams } from '../components/pages/Teams'
import { Tournaments } from '../components/pages/Tournaments'
import { About } from '../components/pages/About'
export const MainRouter = () => {
  return (
    <BrowserRouter>
        {/* Headers below */}
        <Header/>
        {/* Nav below */}
        <Navigation/>
        {/* Routes below */}
        <Routes>
            <Route path='/' element={<Index/>} />
            <Route path="/index" element={<Index/>} />
            <Route path='/teams' element={<Teams/>} />
            <Route path='/tournaments' element={<Tournaments/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    </BrowserRouter>

  )
}
