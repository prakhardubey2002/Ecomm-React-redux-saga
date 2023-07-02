import './App.css';
import Test from './component/Test';
import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch =useDispatch();
  const data ={
    name:"Preshej",
    quantity:2
  }
  return (
    <div className="App">
      <button onClick={()=>dispatch(addToCart(data))} >Add to Cart</button>
      <Test/>
     </div>
  );
}

export default App;
