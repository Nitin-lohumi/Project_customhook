import React, { useState } from "react";
import UseHooks from "./UseHooks";
const ChangeImage =({url}) =>{
    const [change,setChange]=useState(0);
    function handleChange(){
      setChange(change=>change+1);
    }

    return (
        <>
       <div>
         <UseHooks change ={change} url={url}/>
       </div>
        <button  onClick={handleChange} className="m-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
         Click me !
       </button>

        </>
    )
} 
export default ChangeImage;