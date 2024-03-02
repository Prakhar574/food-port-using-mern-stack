import { useContext } from "react";
import { CARD_URL } from "../utils/constants";
import UserContext from "../utils/UserContext"
const ResCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
  }) => {

    //useContext Example
    const {loggedInUser} = useContext(UserContext);

    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">

        <img
        className="rounded-lg"
          src={
            CARD_URL+
            cloudinaryImageId
          }
        />
        <h3  className="font-bold py-4 text-lg">
          {name}
        </h3>
        <h6 className="mb-1 block overflow-hidden h-5">{cuisines.join(", ")}</h6>
        <h6>{areaName}</h6>
        <h4>{costForTwo}</h4>
        <div className="flex justify-between font-semibold">
          <h4>{avgRating}⭐</h4>
          <h4>{sla.slaString}</h4>
        </div>
        {/* <h2>User : {loggedInUser}</h2> */}
      </div>
    )
  };


  // high order component -- its just a function which takes component and gives component back with some inhanchment
  // input ResCard => ResCardPromroted
  // export const withPromotedLabel = (ResCard) => {
  //   return (props) => {
  //     return(
  //       <div>
  //         <label>Promoted</label>
  //         <ResCard {...props}/>
  //       </div>
  //     );
  //   }
  // };

  

export default ResCard;