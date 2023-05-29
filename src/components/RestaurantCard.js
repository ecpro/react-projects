import {IMG_CDN_URL} from "../contants";
import { useContext } from 'react';
import UserContext from "../utils/userContext";

const RestrauntCard = ({
                           name,
                           cuisines,
                           cloudinaryImageId,
                           lastMileTravelString
                       }) => {
    const { user } = useContext(UserContext);
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
            <h6>{user.name}</h6>
            <h6>{user.email}</h6>
        </div>
    );
};

export default RestrauntCard;
