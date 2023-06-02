import React, {Children, lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import ProfileClass from "./components/ProfileClass";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import {Provider} from "react-redux";
import store from "./utils/store";

const Instamart = lazy(() => import('./components/Instamart')),
    About = lazy(() => import('./components/About')),
    Cart = lazy(() => import('./components/Cart'));

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "DDIA",
        email: "mc@gmail.com"
    });

    return (
        <>
          <Provider store={store}>
            <UserContext.Provider value={{
                user: user,
                setUser: setUser
            }}>
                <Header/>
                <Outlet/>
            </UserContext.Provider>
            <Footer/>
          </Provider>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}><About/></Suspense>,
                children: [
                    {
                        path: "profile", // "/profile" -> localhost:1234/profile, "profile" -> localhost:1234/about/profile
                        element: <ProfileClass/>
                    }
                ]
            },
            ,
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            },
            {
                path: '/cart',
                element: <Suspense fallback={<Shimmer/>}><Cart/></Suspense>
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
