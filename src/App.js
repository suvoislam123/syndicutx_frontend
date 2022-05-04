import logo from './logo.svg';
import './App.css';
import Header from './components/sharedComponents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/sharedComponents/NotFound/NotFound';
import Home from './components/standAlonComponents/Home/Home';
import Footer from './components/sharedComponents/Footer/Footer';
import Register from './components/sharedComponents/Login/Register/Register';
import Login from './components/sharedComponents/Login/Login/Login';
import About from './components/standAlonComponents/About/About';
import RequireAuth from './components/sharedComponents/Login/RequireAuth/RequireAuth';
import UserOrders from './components/standAlonComponents/UserOrders/UserOrders';
import AdminOrders from './components/standAlonComponents/AdminOrders/AdminOrders';
import AdminRequireAuth from './components/sharedComponents/Login/RequireAuth/AdminRequireAuth';
import ManageInventory from './components/standAlonComponents/Admin/ManageInventory/ManageInventory';
import AddProduct from './components/standAlonComponents/Admin/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }></Route>
        <Route path='/admin/orders' element={
          <AdminRequireAuth >
            <AdminOrders />
          </AdminRequireAuth>
        }></Route>
        <Route path='/admin/manageinventory/' element={
          <AdminRequireAuth>
            <ManageInventory />
          </AdminRequireAuth>
        }></Route>
        <Route path='/admin/addproduct/' element={
          <AdminRequireAuth>
            <AddProduct />
          </AdminRequireAuth>
        }></Route>
        <Route path='/orders' element={<UserOrders/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>  
      <Footer></Footer>
    </div>
  );
}

export default App;
