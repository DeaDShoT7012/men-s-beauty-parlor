import './App.css';
import Home from './components/Home';
import Tatoo from './components/Tatoo';
import { Route,Routes } from 'react-router-dom';
import Shop from './components/Shop';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='tatoo' element={<Tatoo/>} />
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
