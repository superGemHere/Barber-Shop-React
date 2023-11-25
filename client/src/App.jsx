import './App.css';

import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'

import * as authService from './services/authService.js'
import AuthContext from './contexts/authContext.js';
import Path from './paths.js';


import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import Products from './components/Products/Products.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Logout from './components/Logout/Logout.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import AddPhoto from './components/AddPhoto/AddPhoto.jsx';
import GalleryDetails from './components/GalleryDetails/GalleryDetails.jsx';


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return{};
  });


  const loginSubmitHandler = async(values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken)

    navigate(Path.Home)
  }

  const registerSubmitHandler = async (values) =>{
    console.log(values)
    const result = await authService.register(values.firstName, values.lastName, values.email, values.password);

    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken)

    navigate(Path.Home)
  }

  const logoutHandler = () => {
    setAuth({})
    localStorage.removeItem('accessToken')

    navigate(Path.Home)

  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <>
    <AuthContext.Provider value={values}>
    <Header />
    <Routes>
      <Route path={Path.Home} element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path={Path.Logout} element={<Logout />} />
      <Route path='/clients-feedback' element={<Login />} />
					{/* Photo */}
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/gallery/details/' element={<GalleryDetails />} />

      <Route path='/add-photo' element={<AddPhoto />} />

                    {/* Footer */}
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
    </Routes>
    <Footer />
    </AuthContext.Provider>
    </>
  );

}

export default App
