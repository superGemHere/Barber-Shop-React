import {Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home Template/Home.jsx';
import Services from './components/Services Template/Services.jsx';
import Products from './components/Products Template/Products.jsx';
import Register from './components/Register Template/Register.jsx';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>
  );

}

export default App
