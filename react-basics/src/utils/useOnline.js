import { useState, useEffect } from "react";

export const useOnline = () => {

    [isOnline, setIsOnline] = useState(true);

    const setOnline = () => {
            setIsOnline(true);
        },
        setOffline = () => {
            setIsOnline(false);
        };

    useEffect(() => {
        window.addEventListener('online', setOnline);
        window.addEventListener('offline', setOffline);
        return () => {
            window.removeEventListener('online', setOnline);
            window.removeEventListener('offline', setOffline);
        }
    },[]);

    return isOnline;
}
