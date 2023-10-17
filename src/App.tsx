import './App.css'
import NavBar from './components/navBar/navBar'

function App() {
  const menuItems: string[]= ['Productos','Serivios','Contacto','Foro','Acceso',"Registro"]

  return (
    <>
      <div>
      <NavBar title='Custom Build Computer' items={menuItems}/>

      </div>
    </>
  )
}

export default App

