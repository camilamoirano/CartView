import './App.css';
import NavBar from './components/NavBar';

import ItemListContainer from "./components/Products/ItemListContainer"
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Ecommerce de Productos de Cerámica"/>
      <ItemCount initial={1} stock={10}/>
    </div>
  );
}

export default App;
