import './App.css'
import NavBar from './components/navBar/navBar'
import Contacto from './components/navBar/Contacto/Contacto'

function App() {
  const menuItems: string[]= ['Productos','Servicios','Contacto','Foro','Acceso',"Registro"]

  return (
    <>
      <div>
      <NavBar title='Custom Build Computer' items={menuItems}/>
      <Contacto />
      </div>
    </>
  )
}

export default App

