import { db } from "../data/db";
import { useEffect, useState } from "react";
import { useMemo } from "react";

export const useCart = () => {
    const inicialCart = () => {
        const localCart = localStorage.getItem("cart");
        return localCart ? JSON.parse(localCart) : [];
      };
    
      const [data] = useState(db);
      const [cart, setCart] = useState(inicialCart);
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    
  
  
    //state derivado
  const isEmpty = useMemo(() => cart.length == 0, [cart]);
  const totalCart = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );
  
  
  

  function addCart(guitar) {
    const itemExist = cart.findIndex((item) => item.id === guitar.id);
    if (itemExist >= 0) {
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
      console.log("agregado al carrito");
    } else {
      guitar.quantity = 1;
      setCart([...cart, guitar]);
    }
    // es lo mismo que esto -> setCart((prevCart) => [...prevCart, guitar]);
  }

  function removeItem(id) {
    const updateCart = cart.filter((guitar) => guitar.id !== id);
    setCart(updateCart);
  }

  function increaseQuantity(id) {
    const updateCart = cart.map((guitar) => {
      if (guitar.id === id && guitar.quantity < 10) {
        guitar.quantity++;
      }
      return guitar;
    });
    setCart(updateCart);
  }

  function decreaseQuantity(id) {
    const updateCart = cart.map((guitar) => {
      if (guitar.id === id && guitar.quantity > 1) {
        guitar.quantity--;
      }
      return guitar;
    });
    setCart(updateCart);
  }

  function cleanCart() {
    setCart([]);
  }

  return {
    data,
    cart,
    addCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    isEmpty,
    totalCart,
  };
};


export default  useCart;