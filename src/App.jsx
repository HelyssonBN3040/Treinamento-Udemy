
import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return ( 
    <div className='App'>
      <Navbar />
      <Outlet/>
      <p>footer</p>
    </div>
  )
}

export default App
