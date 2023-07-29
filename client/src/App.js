import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserIndex from './pages/index/UserIndex';
import Login from './pages/login/Login';

import Register from './pages/register/Register';
// import Signup from './pages/signup/Signup';
import AddProducts from './pages/AddProducts';
import ViewProducts from './pages/ViewProducts';
import EditProducts from './pages/EditProducts';
import Products from './components/products/Products';
import Cart from './pages/Cart';
import Fruits from './pages/Fruits';
import Vegetables from './pages/Vegetables';
import NewCart from './pages/NewCart';
import ViewOrder from './pages/ViewOrder';
import Category from './pages/Category';


function App() {
  return (
    <BrowserRouter>
   <Routes>
   <Route  path='/login' element={<Login/>}/>
   <Route  path='/register' element={<Register/>}/>
   <Route path='/home' element={<UserIndex/>}/>
   <Route path='/products' element={<Products/>}/>
   <Route path='/fruits' element={<Fruits/>}/>
   <Route path='/vegetables' element={<Vegetables/>}/>
   <Route path='/newcart' element={<NewCart/>}/>
   <Route path='/category' element={<Category/>}/>


   <Route path='/addproducts' element={<AddProducts/>}/>
   <Route path='/viewproducts' element={<ViewProducts/>}/>
   <Route path='/edit/:id' element={<EditProducts/>}/>

   <Route path='/vieworder' element={<ViewOrder/>}/>
  
     </Routes>
     </BrowserRouter>
  );
}

export default App;
