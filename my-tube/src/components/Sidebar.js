import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";
import store from "../utils/store";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const showSideBar = useSelector((store) => store.app.isMenuOpen);

    return !showSideBar? null : (
        <div className='col-span-1 border border-amber-400 shadow-lg px-5 m-2 w-48'>
            <h1 className='font-bold'></h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li>Shorts</li>
                <li>Live</li>
                <li>Videos</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
};

export default Sidebar;
