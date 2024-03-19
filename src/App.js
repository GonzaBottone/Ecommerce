import './App.css';
import NavBar from './components/NavBar/NavBAr';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemCount from  './components/NavBar/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(' Cantidad agregada : ' ,quantity)}/>
    </div>
  );
}

export default App;
