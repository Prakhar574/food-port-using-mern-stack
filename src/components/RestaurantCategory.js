import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setShowIndex }) => {
    // console.log(data);

    const handleList =() =>{
        // setShowList(!showList);
        setShowIndex();
    }

    return (
        //Header
        <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 my-2 mt-2 " onClick={handleList}>
            <div className="flex justify-between cursor-pointer">
                <span className="font-bold text-md">
                    {data?.title} ({data?.itemCards.length})
                </span> 
                <span>⬇️</span>
            </div>

            {/*accodion body */}
          {showList && <ItemList items={data?.itemCards} />}

        </div>

    );
};

export default RestaurantCategory;
