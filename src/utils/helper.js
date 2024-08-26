
export function filterData(searchTxt, restaurants) {
    const data= restaurants.filter((restaurant)=>
      restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    return data;
   }
 