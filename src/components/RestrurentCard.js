import {CDN_URL} from '../utils/constants';

const RestrurentCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData.info;
  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-amber-100 hover:bg-zinc-300"
      >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={ CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
        <h3>{resData.info.cuisines.join(", ")}</h3>
        <h3>{resData.info.avgRating} Stars</h3>
        <h3>{resData.info.costForTwo}</h3>
        <h3>{resData.info.sla.slaString}</h3>
      </div>
    );
};
export default RestrurentCard;
