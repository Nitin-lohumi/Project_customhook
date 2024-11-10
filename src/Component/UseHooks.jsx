import React from "react";
import { UseFetchHook } from "./UseFetchHook";
const UseHooks = ({change,url}) => {
  const {Data,loading,Error} = UseFetchHook(url,change);
  if (loading) return <p>Loading...</p>;
  if (Error) return <p>Error: {Error.message}</p>
  return <>
         {Data? <div>
            <h2>
                <img src={Data.message} alt="dogs" className="flex  items-center justify-center"/>
            </h2>
          </div>:loading}
          <div>
          </div>
         </>;
};
export default UseHooks;
