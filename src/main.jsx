import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import ErrorPage from './routes/ErrorPage.jsx'
import Contact from './routes/Contact.jsx'
import Home from './routes/Home.jsx'
import Formulario from './routes/Formulario.jsx'
import ConsumoApi from './routes/ConsumoApi.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    // component base
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/contact",
        element: <Contact/>
 
      },
      {
        path:"/form",
        element: <Formulario/>
 
      },
      {
        path:"/api",
        element: <ConsumoApi/>
 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
