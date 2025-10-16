import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  './components/styles/App.css';
import Home from './components/pages/Home'
import Vestuario from './components/pages/Vestuario'
import { Link } from 'react-router-dom'
import Electronica from './components/pages/Electronica'
import Accesorios from './components/pages/Accesorios'

function App() {

  return (
    <BrowserRouter>
    <Link to="/"></Link>
    <Link to="/about"></Link>
    <Link to="/Electronica"></Link>
    <Link to="/Accesorios"></Link>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Vestuario' Component={Vestuario}/>
        <Route path='/Electronica' Component={Electronica}/>
        <Route path='/Accesorios' Component={Accesorios}/>
      </Routes>
    </BrowserRouter>
  )
}
    

export default App
