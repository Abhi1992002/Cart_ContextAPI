import React, { useContext } from 'react'
import { CartContext } from '../context/Cart'

export default function Cart() {

   const cartitems = useContext(CartContext);
 
   const total = cartitems.item.reduce((a,b)=>{
    return a + b.price
   },0)

  return (
    <div className='div'>
      {  cartitems.item.map((i) => {
         return <li>{i.name}- ${i.price} </li>
        })
    } 
    <li>Total is $ {total}</li>
      </div>
  )
}
