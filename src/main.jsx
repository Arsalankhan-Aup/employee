import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Employee from './Pages/Employee.jsx'
import Overview from './Pages/Overview.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
      {
       path:"Overview",
       element:<Overview/>
      },
      {
        path:"Employee",
        element:<Employee/>
      }
    ]
)
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
