import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import FunctionalProfile from "./Profile";
const About = () =>{
  return(
    <div className="w-full h-auto mt-5 p-14 text-black mb-2 font-Poppins sm:p-4 ">
        <h1 className="text-center text-lg">About Us Page</h1> 
        <p className="text-center text-lg">{""} This is swiggy clone</p>
        <FunctionalProfile />
        {/* <Profile/> */}
        {/* <Outlet/> */}
    </div>
  )    
};
  
export default About;