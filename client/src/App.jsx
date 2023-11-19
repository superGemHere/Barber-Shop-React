import {Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import Products from './components/Products/Products.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Gallery from './components/Gallery/Gallery.jsx';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/clients-feedback' element={<Login />} />
      <Route path='/gallery' element={<Gallery />} />

                    {/* Footer */}
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact-us' element={<ContactUs />} />
    </Routes>
    <Footer />
    </>
  );

}

export default App
