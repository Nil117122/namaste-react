import RestrurentCard from "./RestrurentCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestrurent,setListOfRestrurent] = useState(resObj);
  const listOfRestrurentJS = [
    {
      info: {
        id: "10576",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.2,
        sla: {
          slaString: "20-25 mins",
        },
      }
    },
    {
      info: {
        id: "10577",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        sla: {
          slaString: "20-25 mins",
        },
      }
    },
    {
      info: {
        id: "10578",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        sla: {
          slaString: "20-25 mins",
        },
      }
    }
  ];
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestrurent.filter((res)=>res.info.avgRating>=4.5)
            setListOfRestrurent(filteredList)
            }}>
            Top Rated Restrurent
          </button>  
        </div>
        <div className="res-container">
          {listOfRestrurent.map((restrurent) => <RestrurentCard key={restrurent.info.id} resData={restrurent}/>)}
        </div>
      </div>
    );
};
export default Body;