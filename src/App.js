import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/catalogue/ItemListContainer';
import CartWidget from './components/navBar/CartWidget';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ItemDetailContainer from './components/productDetail/ItemDetailContainer';
import ItemDetail from './components/productDetail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <CartWidget/>
      </NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
