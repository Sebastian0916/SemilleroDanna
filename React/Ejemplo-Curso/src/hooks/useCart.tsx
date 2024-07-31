import { useState,useEffect,useMemo } from "react";
import { db } from "../data/db";
import type { Guitar,CartItem } from "../types/types"


export const useCart =()=>{

    const initialCart = (): CartItem[] =>{
        const localStorageCart = localStorage.getItem('cart')
          return localStorageCart ? JSON.parse(localStorageCart):[]
        
      }
    
      const [data] = useState(db);
      const [cart, setCart] = useState(initialCart);
    
      const MAX_ITEMS = 5 
      const MIN_ITEMS = 1 
    
      useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
      },[cart])
    
      function addToCart(item: Guitar) {
        const itemsExists = cart.findIndex(guitar => guitar.id === item.id);
        if (itemsExists >= 0) {
          if(cart[itemsExists].quantity >= MAX_ITEMS)return
          const uppdatedCart = [...cart];
          uppdatedCart[itemsExists].quantity++
          setCart(uppdatedCart)
        } else {
          const newItem : CartItem = {... item, quantity : 1}
         
          setCart([...cart, newItem]);
        }
      }
    
      function removeFromCart(id :Guitar['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
      }
      
      function increaseQuantiy(id:Guitar['id']){
        const uppdatedCart = cart.map(item =>{
          if(item.id === id && item.quantity < MAX_ITEMS){
            return{
              ...item,
              quantity:item.quantity +1
            }
          }
          return item
        })
        setCart(uppdatedCart)
      }
    
      function decreaseQuantity(id :Guitar['id']){
        const uppdatedCart = cart.map(item =>{
          if(item.id === id && item.quantity > MIN_ITEMS){
            return{
              ...item,
              quantity: item.quantity -1
            }
          }
          return item
        })
        setCart(uppdatedCart)
      }
    
      function clearCart(){
        setCart([])
      }
    // state derivado
  const isEmpty =useMemo ( ()=> cart.length === 0,[cart]);
  const cartTotal =useMemo(() => cart.reduce((total, item )=> total+(item.quantity * item.price), 0),[cart])
    return{
        data,cart,addToCart,removeFromCart,decreaseQuantity,increaseQuantiy,clearCart,isEmpty,cartTotal
    }
}