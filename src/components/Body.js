import ResCard from "./ResCard";
import { RESLIST_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const ResCardPromroted = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESLIST_URL);
    const json = await data.json();

    //optional chaining
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //check online or offline
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1 className="font-extrabold text-center text-3xl">You are Offline. Please check your internet connection!!</h1>;

  //useContext
  // const { setUserName, loggedInUser } = useContext(UserContext);


  //conditional rendering
  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex ml-[2.5%]">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            type="submit"
            onClick={() => {
              const resUpdatedList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(resUpdatedList);
            }}
          >
            Submit
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const resupdatedlist = restaurantList.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredList(resupdatedlist);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredList?.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant?.info?.id}
            >
              <ResCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
