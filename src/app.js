import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'; 
import Header from './component/Header';
import Body from './component/Body';
import RestaurantMenu from './component/RestaurantMenu';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './component/About';
import Error from './component/Error';
import Profile from './component/Profile';
//import Instamart from './component/Instamart';
import Shimmer from './component/Shimmer';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import store from "./utils/store"

 
const Instamart = lazy(()=>import("./component/Instamart"));

const AppLayout = ()=>{
   return(
      
    <Provider store= {store}>    
         <Header/>
         <Outlet/>
         <Footer/> 

      </Provider>
   )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Body/ >,
              
            },
            {
                path: "about/",
                element: <About/ >,
                children:[
                    {
                    path:"profile",
                    element:<Profile/>
                },
            ]
              
            },
            {
                path: "contact/",
                element: <Contact/ >,
              
            },
            {
                path: "restaurant/:resId",
                element: <RestaurantMenu/ >,
              
            },
            {
                path: "cart/",
                element: <Cart/ >,
              
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            },
        ]
    },
    
    
]);    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter}/>)