import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import Contacto from './components/navBar/Contacto/Contacto'
import Landing from './components/Landing/landing'

function App() {
  const menuItems: string[] = ['Productos', 'Serivios', 'Contacto', 'Foro', 'Acceso', "Registro"]

  return (
    <>
      <div>
        <NavBar title='Custom Build Computer' items={menuItems} />
        <Routes>
          <Route path="/" element={<Landing />} />
          {
            // <Route path="/Productos" element={<Productos />} />
            // <Route path="/Servicios" element={<Servicios />} 
          }
          <Route path="/" element={<Contacto />} />



        </Routes>


      </div>
    </>
  )
}

export default App

