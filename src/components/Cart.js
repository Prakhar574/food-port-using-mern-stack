import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart =() => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return(
        <div className="text-center mb-14 mt-10">
            <h1 className="m-4 p-2 text-3xl font-bold text-center text-gray-900 mb-8 text-[37px]">Cart</h1>

            <button className="m-2 p-1 text-sm bg-black text-white rounded-lg"
            onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length==0 && <h1>Your cart is empty.</h1>}

            <div className="w-6/12 m-auto bg-gray-50 rounded-lg">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;