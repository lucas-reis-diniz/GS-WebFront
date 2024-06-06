import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Data from './pages/Data/Data.jsx'
import Login from './pages/Login/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.js'


const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/About', element: <About />},
      {path: '/Login', element: <Login />},
      {path: '/Data', element: <ProtectedRoute element={<Data />} />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)