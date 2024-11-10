import React, { useEffect, useState } from 'react';
export const UseFetchHook=(url,change)=>{
    const[Data,setData] = useState(null);
    const[loading,setLoading] = useState(false);
    const[Error,setError] = useState(null);
    useEffect(()=>{
      if(change==0) return;
    if(!url) return;
    const fetchdata=async()=>{
       try {
         setLoading(true);
         const response = await fetch(url);
         if(!response.ok)  throw new Error("response is not okk");
         const data = await response.json();
         console.log(data);
         setData(data);
       } catch (error) {
        setError(error);
       }finally{
        setLoading(false);
       }
    }
    fetchdata();
    },[url,change]);
    return {Data,loading,Error};
}