import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About.jsx'
import Restaurant from './pages/Restaurant.jsx'
import appStore from './lib/appStore'
import Home from './pages/Home'
import App from './App'
import Cart from './pages/Cart'
const Grocery = lazy( ()=> import('./pages/Grocery.jsx'))


const myRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/restaurant/:restaurantId',
        element : <Restaurant/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/grocery',
        element : <Suspense fallback={<h1>....loading</h1>}> <Grocery/> </Suspense>
      },
      {
        path : '/cart',
        element : <Cart/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={appStore}>
    <RouterProvider router={myRouter}></RouterProvider>
  </Provider>
  
)
