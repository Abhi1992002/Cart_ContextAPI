
import './App.css';
import Cart from './components/Cart';
import CartItem from './components/CartItem';


function App() {
  return (
    <div className="App">
  <CartItem name={"macbook"} price={1500} />
  <CartItem name={"I pad"} price={1300} />
  <CartItem name={"I phone"} price={1000} />
  <Cart />
    </div>
  );
}

export default App;
