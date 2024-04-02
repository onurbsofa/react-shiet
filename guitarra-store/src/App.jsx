import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer";
import { db } from "./data/db";
import { useEffect, useState } from "react";

export default function App() {

  const inicialCart = () => {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(inicialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  return (
    <>
      <Header
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
        cleanCart={cleanCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar
                guitar={guitar}
                key={guitar.id}
                setCart={setCart}
                addCart={addCart}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
