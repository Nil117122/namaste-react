import RestrurentCard from "./RestrurentCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
const Body = () => {
  const [listOfRestrurent, setListOfRestrurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestrurent, setFilteredRestrurent] = useState([]);

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


  return listOfRestrurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
           type="text"
           className="search-in" 
           value={searchText}
           onChange={(e) =>{
            setSearchText(e.target.value);
          }}
           />
          <button 
          onClick={()=>{
            const filteredRestrurent = listOfRestrurent.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(filteredRestrurent);
            setFilteredRestrurent(filteredRestrurent);
          }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestrurent.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestrurent(filteredList);
          }}
        >
          Top Rated Restrurent
        </button>
      </div>
      <div className="res-container">
        {filteredRestrurent.map((restrurent) => (
          <RestrurentCard key={restrurent.info.id} resData={restrurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
