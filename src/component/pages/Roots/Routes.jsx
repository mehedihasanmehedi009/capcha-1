import { createBrowserRouter } from "react-router";
import MainLoyet from "../../MainLoyete/MainLoyet";
import Homepage from "../HomePages";
import AboutUs from "../AboutUs";
import Profile from "../Profile";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLoyet/>,
    children:[
        {
        index:true,
        element:<Homepage/>
        }
        ,{
           path:"/about",
           element:<AboutUs/> 
        }
        ,{
            path:"/profile",
            element:<Profile/>
        }
    ]
  },
]);