import React , {useContext} from 'react'
import { CartContext } from '../context/Cart'

export default function CartItem(props) {

    const cart = useContext(CartContext)

    const addItem = ()=>{
        cart.setItem([...cart.item , {name: props.name , price : props.price}])
    }
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button onClick={addItem}>Add to Cart</button>
    </div>
  )
}
