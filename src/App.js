import './App.css';
import { Routes,Route } from 'react-router-dom';
import Cart from './pages/cart';
import Home from './pages/home';
import Men from './pages/men';
import Woman from './pages/woman';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/men' element={<Men />}/>
      <Route path='/woman' element={<Woman />}/>
    </Routes>
  );
}

export default App;
