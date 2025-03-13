import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Pages/Home.jsx'
import SignUp from './components/Pages/SignUp.jsx'
import Login from './components/Pages/Login.jsx'
import AddCraftItem from './components/AddCraftItem.jsx'
import AllCraftItems from './components/AllCraftItems.jsx'
import MyList from './components/Pages/MyList.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Details from './components/Pages/Details.jsx'
import Error from './components/Pages/Error.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import UpdateInfo from './components/Pages/UpdateInfo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-item',
        element: <PrivateRoute><AddCraftItem /></PrivateRoute>
      },
      {
        path: '/all-items',
        element: <AllCraftItems />,
      },
      {
        path: 'item/:id',
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-server-by-tirtho.vercel.app/product/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <UpdateInfo />,
        loader: ({ params }) => fetch(`https://art-and-craft-server-by-tirtho.vercel.app/product/${params.id}`)
      },
      {
        path: '/my-list',
        element: <PrivateRoute><MyList /></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
) 
