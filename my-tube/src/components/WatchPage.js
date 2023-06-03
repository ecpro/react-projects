import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {closeMenu} from "../utils/appSlice";
import {useSearchParams} from "react-router-dom";

const WatchPage = () => {

    const dispatch = useDispatch(),
        [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className='px-5'>
            <iframe
                width='1000'
                height='450'
                src={'https://youtube.com/embed/' + searchParams.get('v')}
                title=''
                allowFullScreen
            >
            </iframe>
        </div>
    );
};

export default WatchPage;
