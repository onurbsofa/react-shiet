import Header from "./components/Header";
import Guitar from "./components/Guitar";
import Footer from "./components/Footer";
import { useCart } from "./hooks/useCart";


export default function App() {
  const {
    data,
    cart,
    addCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    isEmpty,
    totalCart,
    cleanCart,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
        cleanCart={cleanCart}
        isEmpty={isEmpty}
        totalCart={totalCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => {
            return <Guitar guitar={guitar} key={guitar.id} addCart={addCart} />;
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
