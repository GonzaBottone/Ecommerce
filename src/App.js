import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemDetaliContainer from './components/ItemDetaliContainer/ItemDetaliContainer';

import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
            <Route path='/item/:itemId' element={< ItemDetaliContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
         </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
