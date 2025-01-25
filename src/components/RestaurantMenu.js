import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const { resID } = useParams();
  console.log("resID", resID);
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch( MENU_URL + resID);
    const json = await data.json();
    console.log(json);
    setMenuInfo(json);
  };

  const { name, cuisines, costForTwoMessage } =
    menuInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const { itemCards } =
    menuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  console.log("itemCards", itemCards);

  return menuInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice/100} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
