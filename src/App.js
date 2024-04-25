import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemDetaliContainer from './components/ItemDetaliContainer/ItemDetaliContainer';


import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetaliContainer/> } />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
         </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
