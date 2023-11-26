import './App.css';

import {Routes, Route} from 'react-router-dom'

import * as authService from './services/authService.js'
import {AuthProvider} from './contexts/authContext.jsx';
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

  return (
    <>
    <AuthProvider>
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
    </AuthProvider>
    </>
  );

}

export default App
