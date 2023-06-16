import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {closeMenu} from "../utils/appSlice";
import {useSearchParams} from "react-router-dom";
import Comment from "./Comment";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {

    const dispatch = useDispatch(),
        [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div>
            <div className='px-5 flex'>
                <div className='flex flex-col'>
                    <iframe
                        width='1000'
                        height='450'
                        src={'https://youtube.com/embed/' + searchParams.get('v')}
                        title=''
                        allowFullScreen
                    >
                    </iframe>
                    <CommentsContainer />
                </div>
                <div className='w-full'>
                    <LiveChat/>
                </div>
            </div>
        </div>
    );
};

export default WatchPage;
