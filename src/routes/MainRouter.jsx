import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from '../layout/Header'
import { Navigation } from '../layout/Navigation'
import { Index } from '../layout/Index'
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
            <Route path='/teams' element={<h1>Teams</h1>} />
        </Routes>
    </BrowserRouter>

  )
}
