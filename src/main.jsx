import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Layout from './Layout/Layout.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProducts from './CartProducts/CartProducts.js';
import Checkout from './components/Checkout/Checkout.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import UserContext from './contexts/UserContext.jsx';
import Shipping from './components/Shipping/Shipping.jsx';
import PrivateRouter from './router/PrivateRouter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProducts
      },
      {
        path: '/inventory',
        element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
      },
      {
        path: '/shipping',
        element: <PrivateRouter><Shipping></Shipping></PrivateRouter>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path:'*',
        element: <div><h2>Error 404 Not Found</h2></div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
    </UserContext>
  </React.StrictMode>,
)
