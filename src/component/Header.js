import { useState, useContext} from 'react';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const logedInUser = () => {
return true;
};
const Title = ()=>(
    // <h1 id="title" key="h2">FeastFleet</h1>
    <a href='/'>
    <img className="h-28 p-2" alt='logo' src={logo}/>
    </a>
 );
 
 

 const Header = ()=>{
   const [isLogedIn, setILogedIn] = useState(false);
   const {user} = useContext(UserContext);
    return(
     <div  className='flex justify-between bg-pink-50 shadow-md '>
         <Title />
     <div className='nav-items '>
       <ul className='flex py-11 text-2xl'>
          <li className='px-2  hover:text-gray-500 hover:text-xl'><Link to="/">Home</Link></li>
          <li className='px-2  hover:text-gray-500 hover:text-xl'><Link to="/about">About</Link></li>
          <li className='px-2  hover:text-gray-500 hover:text-xl'><Link to="/contact">Contact</Link></li>
          <li className='px-2  hover:text-gray-500 hover:text-xl'><Link to="/cart">Cart</Link></li>
          <li className='px-2  hover:text-gray-500 hover:text-xl'><Link to="/instamart">Instamart</Link></li>
          <li className='px-2 '><h3 >{useOnline ? "✅" : "🔴"} </h3></li>
       </ul>
       
     </div>
   {/* <span>{user.name}</span> */}
     {isLogedIn ? <button onClick={()=> setILogedIn(false)}>Logout</button> : 
     <button onClick={()=> setILogedIn(true)}>Login</button>
     
     }
     
     </div>
    );    
 };

 export default Header;