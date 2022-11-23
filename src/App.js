import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidget/>
      </NavBar>
      <ItemListContainer greeting='Hola mundo'/>
{/*   <Section1/>
      <Section2/>
      <Footer/>       */}
    </div>
  );
}

export default App;
