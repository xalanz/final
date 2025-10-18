import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  './components/styles/App.css';
import Home from './components/pages/Home'
import Vestuario from './components/pages/Vestuario'
import { Link } from 'react-router-dom'
import Electronica from './components/pages/Electronica'
import Accesorios from './components/pages/Accesorios'
import Login from './components/pages/Login.jsx'
import Registro from './components/pages/Registro.jsx'
import { CartProvider } from './context/CartContext.jsx'
import CartIcon from './components/organisms/atom/CartIcon'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CartIcon />
        <Link to="/Home"></Link>
        <Link to="/about"></Link>
        <Link to="/Electronica"></Link>
        <Link to="/Accesorios"></Link>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/inicio' Component={Login} />
          <Route path='/registro' Component={Registro} />
          <Route path='/Vestuario' Component={Vestuario}/>
          <Route path='/Electronica' Component={Electronica}/>
          <Route path='/Accesorios' Component={Accesorios}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
    

export default App
