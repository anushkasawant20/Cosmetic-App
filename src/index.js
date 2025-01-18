import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
import Error_page from './Error_Page';
import Userproduct from './UserProduct';
import Cart from './Cart';
import Admin from './Admin';
import AddProduct from './AddProduct';
import ShowProduct from './ShowProduct';
import Search from './Search';
import ProductDetail from './ProductDetail';
import Navbar from './Navbar';
const router  = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error_page />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:"/home",
        element:<Home />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/reg",
        element:<SignUp />
      },
      {
        path:"/login",
        element:<SignIn />
      },
      {
        path:"/userproduct",
        element:<Userproduct />
      },
      {
        path:"/product/:id",
        element:<ProductDetail />
      },
      {
        path:"/:pid/addCart",
        element:<Cart />
      },
      {
        path:"/myCart",
        element:<Cart />
      },
      {
        path:"/admin",
        element:<Admin />
      },
      {
        path:"/addProduct",
        element:<AddProduct />
      },
      {
        path:"/showProduct",
        element:<ShowProduct />
      },
      {
        path:"/profile",
        element:<Profile />
      },
      {
        path:"/search",
        element:<Search />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
    
);