import logo from './logo.svg';
import './App.css';
import Header from './components/sharedComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/sharedComponents/NotFound/NotFound';
import Home from './components/standAlonComponents/Home/Home';
import Footer from './components/sharedComponents/Footer/Footer';
import Register from './components/sharedComponents/Login/Register/Register';
import Login from './components/sharedComponents/Login/Login/Login';

function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>  
      <Footer></Footer>
    </div>
  );
}

export default App;
