import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserIndex from './pages/index/UserIndex';
function App() {
  return (
    <BrowserRouter>
   <Routes>
   {/* <Route  path='/user' element={<MainPage/>}/> */}
   <Route path='/userindex' element={<UserIndex/>}/>

   
     </Routes>
     </BrowserRouter>
  );
}

export default App;
