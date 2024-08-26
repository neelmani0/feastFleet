import { restaurantsList } from './Constant';
import RestaurantCard from './RestaurantCard';
import { useEffect, useState} from 'react';useEffect
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';
    

const Body = ()=>{
   const [allRestaurants, setAllRestaurants]= useState([]);
    const [searchTxt, setSearchTxt] = useState(""); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=>{
      getRestaurant()
    },[]) 
   async function getRestaurant(){
    try{
      const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const res = await data.json();
         console.log(res);

         async function checkJsonData(jsonData) {

          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
            // initialize checkData for Swiggy Restaurant data
            let checkData = res?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(res);
     setAllRestaurants(resData);
     setFilteredRestaurants(resData);
    }
      catch(error){
        console.log(error);
      }
     
   //  const data1= (res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   //  console.log(data1)
   };
    // const isOnline = useOnline();
    // if (!isOnline){
    //   return <h1> Offline, please check your internet connection!!</h1>
    // }

    // if (!allRestaurants) return null;
    // if (filteredRestaurants?.length === 0)
    //   return <h1>No Restaurant match your filter!!</h1>

    return(allRestaurants?.length === 0) ? (
     <Shimmer/> 
    
   ) :(
        <>
        <div className='search-container p-4 bg-pink-50 my-2 '>
          <div className='ml-24'>
         <input 
         type='text'
         className='search-input'
         placeholder='Search'
         value={searchTxt}
         onChange={(e)=>{
            setSearchTxt(e.target.value)
         }}
         />
         <button className='p-2 m-2 bg-purple-800 text-white rounded-lg '
         onClick={()=>{
           const data= filterData(searchTxt,allRestaurants);
           setFilteredRestaurants(data);
         }}>Search</button>
         </div>
        </div>
       <div className='flex flex-wrap ml-24 '>
       {/* filteredRestaurants.map */}
          {(filteredRestaurants?.length === 0 ? <h1>No Data Found try something else</h1> :
          filteredRestaurants.map((restaurant)=>{
             return(
               <Link key={restaurant?.info.id}
               to={"/restaurant/" + restaurant?.info.id}> <RestaurantCard  {...restaurant.info}/></Link>
                
             );
          }
          )
          )}
     
          
       </div>
       </>
    );
    };

    export default Body;