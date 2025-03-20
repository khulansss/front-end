import React, {useState} from "react";

export default function useStateHook() {
    const [count, setCount] = useState("");
    //shineeer 
   
    return(
        <div >
            
            <button className="border border-black m-3 p-2 " onClick={() => setCount("khulan")}>Click me</button>
            <button className="border border-black m-3 p-2 " onClick={() => setCount("")}>Click me</button>
            <p className="ml-3">{count}</p>
            <div className="w-20 h-30 bg-black"></div>
            
        </div>
        
        
    )
};
