import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Service from './pages/Service/Service';
import Register from './pages/Register/Register';
import About from './pages/About/About';


function App() {
  return (
    <div className="container">
        <Header/>
        <Navbar/>
        <div className='main'>
            <Sidebar/>
            <Routes>
            
            <Route path='/content' element={<Content/>}/> 
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/service' element={<Service/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
