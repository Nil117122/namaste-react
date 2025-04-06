import { Link } from "react-router-dom";
import RestrurentCard from "./RestrurentCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestrurent, setListOfRestrurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestrurent, setFilteredRestrurent] = useState([]);

  console.log("render", listOfRestrurent);
  

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
   
    
    setListOfRestrurent(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestrurent(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };
  const onlineStatus = useOnlineStatus();
  
   if(onlineStatus === false) return <h1>You're currently offline,Please check your internet connection</h1>

  return listOfRestrurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search m-2 p-1">
          <input
           type="text"
           className="border border-solid border-black" 
           value={searchText}
           onChange={(e) =>{
            setSearchText(e.target.value);
          }}
           />
          <button 
          className="bg-green-300 px-2 py-1 m-2 rounded-lg"
          onClick={()=>{
            const filteredRestrurent = listOfRestrurent.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(filteredRestrurent);
            setFilteredRestrurent(filteredRestrurent);
          }}
          >Search</button>
        </div>
        <div className="m-1 p-1 flex items-center">
        <button
          className="bg-orange-300 px-2 py-1 m-2 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestrurent.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestrurent(filteredList);
          }}
        >
          Top Rated Restrurent
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestrurent.map((restrurent) => (
          <Link
            to={"/restaurants/"+restrurent.info.id}
            key={restrurent.info.id}
          >
            <RestrurentCard resData={restrurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
