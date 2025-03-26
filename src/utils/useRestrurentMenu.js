import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestrurentMenu = (resID) =>{

    const [menuInfo,setMenuInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL + resID);
        const json = await data.json();
        setMenuInfo(json);
    }
    return menuInfo;
}

export default useRestrurentMenu;