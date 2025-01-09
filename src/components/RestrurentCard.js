import {CDN_URL} from '../utils/constants';

const RestrurentCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData.info;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{resData.info.name}</h3>
        <h3>{resData.info.cuisines.join(", ")}</h3>
        <h3>{resData.info.avgRating} Stars</h3>
        <h3>{resData.info.costForTwo}</h3>
        <h3>{resData.info.sla.slaString}</h3>
      </div>
    );
};
export default RestrurentCard;
