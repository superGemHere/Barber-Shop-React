import './App.css';

import {Routes, Route} from 'react-router-dom'

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
import NotFound from './components/NotFound/NotFound.jsx';
import UpdatePhoto from './components/UpdatePhoto/UpdatePhoto.jsx';
import Profile from './components/Profile/Profile.jsx';
import Admin from './components/Admin/Admin.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
import AuthGuard from './components/Guards/AuthGuard.jsx';
import LogRegGuard from './components/Guards/LogRegGuard.jsx';
import AdminGuard from './components/Guards/AdminGuard.jsx';
import AuthorizationGuard from './components/Guards/AuthorizationGuard.jsx';
import BeardTrimming from './components/ServiceViews/BeardTrimming.jsx';
import Haircut from './components/ServiceViews/Haircuts.jsx';
import OtherServices from './components/ServiceViews/OtherServices.jsx';


function App() {

  return (
    <>
    <AuthProvider>
    <Header />
    <Routes>
			<Route path={Path.Home} element={<Home />} />
							{/* Services */}
			<Route path='/services' element={<Services />} />
			<Route path='/services/beard-trimming' element={<BeardTrimming />} />
			<Route path='/services/haircuts' element={<Haircut />} />
			<Route path='/services/other-services' element={<OtherServices />} />
							{/* Login/Register Guard */}
				<Route element={<LogRegGuard />}>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Route>
							{/* Products */}
			<Route path='/products' element={<Products />} />
			<Route path='/products/details/:productId' element={<ProductDetails />} />
			<Route path='/wishlist' element={<Wishlist />} />
							{/* Photo */}
			<Route path='/gallery' element={<Gallery />} />
			<Route path='/gallery/details/:photoId' element={<GalleryDetails />} />
							{/* Authorization Guard */}
			<Route element={<AuthorizationGuard />}>
					<Route path='/gallery/edit/:photoId' element={<UpdatePhoto />} />
			</Route>
							{/* AuthGuard */}
				<Route element={<AuthGuard />}>
					<Route path='/add-photo' element={<AddPhoto />} />
					<Route path='/profile' element={<Profile />}/>
					<Route path={Path.Logout} element={<Logout />} />
				</Route>
							{/* Admin Guard */}
				<Route element={<AdminGuard />}>
					<Route path='/admin' element={<Admin />}/>
				</Route>

							{/* Footer */}
			<Route path='/about-us' element={<AboutUs />} />
			<Route path='/contact-us' element={<ContactUs />} />
			<Route path='*' element={<NotFound />} />  
		
      
    </Routes>
    <Footer />
    </AuthProvider>
    </>
  );

}

export default App
