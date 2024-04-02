import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer";
import { db } from "./data/db";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

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

  

  return (
    <>
      <Header 
      cart={cart}
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
