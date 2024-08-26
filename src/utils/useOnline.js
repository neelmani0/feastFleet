import { useEffect, useState } from "react";

const useOnline = ()=>{
    
    const [isOnline, setOnLine] = useState(true);
    useEffect(()=>{
        const handleOnline = ()=>{
            setOnLine(true);
        };
        const handleOffline = ()=>{
            setOnLine(false);
         };
        
    window.addEventListener("online",handleOnline );
    window.addEventListener("offline",handleOffline);
      
    return()=>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline", handleOffline);
      }
    },[]);

    return isOnline;
};

export default useOnline;