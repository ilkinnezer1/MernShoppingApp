import './App.scss'; 
import { useEffect } from 'react';
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './components/Navbar/Navbar';
import PageLogin from './Pages/Login/PageLogin';
import Login from './Pages/Register/Login';
import Bag from './Pages/Bag/Bag';
import Footer from './components/AboutFooter/Footer';
import MainFooter from './components/Footer/MainFooter';
import { useLocation } from 'react-router';

function App() {
  const {pathname} = useLocation()
  useEffect(() => {
      window.scrollTo(0,0)
  },[pathname])

  return (
    <div className="App">
            <Navbar/>
           <Routes>
          <Route path="/" exact element={ <Home/>}/>
          <Route path="about" element={ <About/>}/>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<PageLogin/>}/>
          <Route path="product" element={<Bag/>} />
          </Routes>
          <MainFooter/>
          <Footer/>
    </div>
  );
}

export default App;
