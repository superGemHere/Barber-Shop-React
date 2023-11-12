import {Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home Template/Home.jsx';
import Services from './components/Services Template/Services.jsx';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
    </Routes>
    </>
  );

}

export default App
