import React from 'react'
// import cart from "../assets/working-on.jpg";
import {useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemCard';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    // return (
    //     <div className='justify-center align-middle flex mb-20 max-h-full'>
    //         <img
    //             className="Cart image w-auto p-20 shadow-black shadow-lg mr-20 h-full mb-30 "
    //             src={cart}
    //             alt="Cart workm under process"
    //             title="Cart image"
    //         />
    //     </div>
    // )  
    const dispatch = useDispatch();
    const cartItems =useSelector(store => store.cart.items);  
    const handleClearCart = ()=>{
       dispatch(clearCart());
    };


    return(
        <>
          <div className='text-center text-3xl '>
            <h1 className=''>Cart Items - {cartItems.length}</h1>
           
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}>Clear Cart </button>
           {cartItems.length === 0 && (
            <h1>Cart is empty. Add items to the cart!</h1>
            )}
          </div>
          <div className="w-6/12 m-auto">
         
            <ItemList key={cartItems.id} items={cartItems} />
          </div>
        </>
      );
};
export default Cart;






