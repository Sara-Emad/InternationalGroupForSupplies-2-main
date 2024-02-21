import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Aboutus from './pages/Aboutus/Aboutus';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route  path="Home" element={<Home />} />
      <Route  path="Aboutus" element={<Aboutus />} />
      <Route  path="Products" element={<Products />} />
      <Route  path="Team" element={<Team />} />
      <Route  path="Contact" element={<Contact />} />
      <Route  path="PrivacyPolicy" element={<PrivacyPolicy />} />



      




      






    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  
    
  </React.StrictMode>,
)

