import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts from './pages/Posts.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>
  },

  {
    path:"/posts",
    element: <Posts></Posts>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store ={store}>
    <RouterProvider router ={router}></RouterProvider>
  
    </Provider>
  
  </React.StrictMode>,
)
