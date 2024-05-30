import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
const Grocery = lazy( ()=> import('./pages/Grocery.jsx'))

const myRouter = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
    path : '/grocery',
    element : <Suspense fallback={<h1>....loading</h1>}> <Grocery/> </Suspense>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRouter}></RouterProvider>
)
