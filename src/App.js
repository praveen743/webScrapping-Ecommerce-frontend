import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Createproduct from './Createproduct.js'
import react from 'react';
import Dashboard from './Dashboard';
import Search from './Search';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <div className='row'> 
      <diV className='col-lg-4'><h1>Mobiles</h1></diV> 
      <diV className='col-lg-4'><Link to='/create'>
      <button className='btn btn-primary mt-1'>create product</button></Link></diV>
      <diV className='col-lg-4'><Link to='/dash'>
      <button className='btn btn-primary mt-1'>view all</button></Link></diV>
      </div>
     <div className='row'> <diV className='col-lg-4 mt-3 mb-3'> <Search/></diV>
     
      <Routes>
      <Route path="/create" element={<Createproduct/>} />
      <Route path="/dash" element={<Dashboard/>} />
      </Routes>
     </div>
     </div>
     </BrowserRouter>
  );
}

export default App;
