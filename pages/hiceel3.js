import React, {useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function useStateHook(){
     const [name, setName] = useState("");
     const router = useRouter();
    return(
        <div className="h-screen w-full bg-white text-black ">
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
                                    <div className="flex justify-center items-center">
            <p className="mr-5">Name:</p>
            <input type="text" className="border border-black rounded p-2" size="10" onChange={(e) => setName(e.target.value)} />
            <p className="ml-3">Hi 11v,  </p>
            
            {name==("") ? (<><p className="ml-3" > Suragch</p></>) : <p className="ml-3">{name}</p> }
            </div>
        </div>
    )
}