const Cart = ({ cart, handleRemoveFromLS }) => {
  return (
    <div className="flex gap-2">
    
      {cart.map((c) => (
        <div key={c.id}>
          <img  className="w-20" src={c.img}></img>
          <button className="bg-black py-2 text-white px-1 rounded-md" onClick={() => handleRemoveFromLS(c.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
