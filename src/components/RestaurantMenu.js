import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrurentMenu from "../utils/useRestrurentMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const menuInfo = useRestrurentMenu(resID);
  
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
