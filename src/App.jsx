import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from './page/Homepage';
import Shop from './page/Shop';
import Product from './page/Product';
import Contact from './page/Contact';
import About from './page/About';
import Login from './page/Login';
import Signup from './page/Signup';
import Cart from './page/Cart';
import Cheakout from './page/Cheakout';
import Error from './page/Error';
import Rootpage from './page/Rootpage';
import Journal from './page/Journal';

const router = createBrowserRouter(
  createRoutesFromElements(
 <>
   <Route
      path="/"
      element={< Rootpage/>}
     
    >
       <Route
      path="/"
      element={<Homepage />}
     
    ></Route>
       <Route
      path="shop"
      element={<Shop />}
     
    ></Route>
       <Route
      path="product"
      element={<Product />}
     
    ></Route>
       <Route
      path="contact"
      element={<Contact />}
     
    ></Route>
       <Route
      path="about"
      element={<About />}
     
    ></Route>
       <Route
      path="login"
      element={<Login />}
     
    ></Route>
       <Route
      path="signup"
      element={<Signup />}
     
    ></Route>
       <Route
      path="cart"
      element={< Cart/>}
     
    ></Route>
       <Route
      path="cheakout"
      element={<Cheakout/>}
     
    ></Route>
       <Route
      path="journal"
      element={<Journal/>}
     
    ></Route>
       <Route
      path="/*"
      element={<Error/>}
     
    ></Route>
    </Route>
 </>
  )
);

const App = () => {
  return (
       <RouterProvider router={router} />

  )
}

export default App