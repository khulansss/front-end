import React, {useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function useStateHook() {
    const [count, setCount] = useState("");
    const router = useRouter();
   
    return(
        <div className="bg-white w-full h-screen text-black">
              <button
                          className="  w-[50px] h-[50px] pl-1 ml-3 " 
                          onClick={() => { router.push("main"); }}
                          aria-label="Go push"
                        >
                          <Image
                                    src="/back.png"
                                    height={30}
                                    width={30}
                                    className=""
                                    
                                    onClick={() => { router.push("main"); }}
                                    
                                  />
                          
                        </button>
                        <div>
            <button className="border border-black m-3 p-2 text-black " onClick={() => setCount("khulan")}>Click me</button>
            <button className="border border-black m-3 p-2 text-black " onClick={() => setCount("")}>Click me</button>
            <p className="ml-3">{count}</p></div>
            
            
        </div>
        
        
    )
};
