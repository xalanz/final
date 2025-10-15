import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Vestuario from './components/pages/Vestuario'
import { Link } from 'react-router-dom'
import Electrónica from './components/pages/Electrónica'
import Accesorios from './components/pages/Accesorios'

function App() {

  return (
    <BrowserRouter>
    <Link to="/"></Link>
    <Link to="/about"></Link>
    <Link to="/Electrónica"></Link>
    <Link to="/Accesorios"></Link>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Vestuario' Component={Vestuario}/>
        <Route path='/Electrónica' Component={Electrónica}/>
        <Route path='/Accesorios' Component={Accesorios}/>
      </Routes>
    </BrowserRouter>
  )
}
    

export default App
