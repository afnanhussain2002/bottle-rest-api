

const Bottle = ({bottle, handleBuyBottle}) => {
    
    const {name, img, price  } = bottle
    return (
        <div className="grid justify-center mt-4 border gap-2">
            <img className="w-52" src={img} alt={name} />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="font-semibold">Price: ${price}</p>
            <button onClick={()=> handleBuyBottle(bottle)} className="bg-black text-white py-2 rounded-md font-bold">Add To Cart</button>
        </div>
    );
};

export default Bottle;