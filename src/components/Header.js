import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const[logbtn, setlogbtn]=useState("Login");
  const onlineStatus = useOnlineStatus();

  //useContext example
  const {loggedInUser}=useContext(UserContext);

  //using selector to subscribe the cart items or store
  const cartItems= useSelector((store)=>store.cart.items);

  //refresh page
  const refreshPage=()=>{
    window.location.reload(false);
  }

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
        <div className="w-44 justify-center ml-3 mt-4">
          <button onClick={refreshPage}><img src="https://www.foodport.us/img/logologo.f87723ea.png" alt="logo" /></button>
        </div>

        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4 font-semibold "><Link to="/cart">🛒<sup>{cartItems.length}</sup></Link></li>
            <li className="cursor-pointer">
            <Link to="/login">Login</Link>
            </li>
            {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    );
  };

  export default Header;