import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import { addToLS, getStoredCart, removeFromLS } from "../utilitis/localstorage";
import Cart from "../cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [addBottles, setAddBottles] = useState([]);

  const handleBuyBottle = (bottle) => {
    console.log(bottle);
    const newAddBottles = [...addBottles,bottle];
    setAddBottles(newAddBottles)
    addToLS(bottle.id)
  };

  const handleRemoveFromLS = id =>{
    const remainingCart = addBottles.filter(bottle => bottle.id !== id)
    setAddBottles(remainingCart)
    removeFromLS(id);
  }

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  useEffect(()=>{
     if (bottles.length > 0) {
        const stroedCart = getStoredCart()
        console.log(stroedCart);
        const savedCart = [];

        for( const id of stroedCart){
            console.log(id);
            const bottle = bottles.find(bottle => bottle.id === id)
            if (bottle) {
                savedCart.push(bottle)
            }
        }
        console.log('saved cart', savedCart);
        setAddBottles(savedCart)
     }
  }, [bottles])
  return (
    <div>
      <h3 className=" font-semibold text-4xl ml-5">Cart items</h3>
      <div className="mt-3 ml-5">
       <Cart cart={addBottles} handleRemoveFromLS={handleRemoveFromLS}></Cart>
      </div>
      <h3 className="text-center font-semibold text-4xl">Bottles Store</h3>
      <div className="grid grid-cols-3">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleBuyBottle={handleBuyBottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
