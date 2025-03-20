import React, {useState} from "react";
export default function useStateHook(){
     const [name, setName] = useState("");
    return(
        <div className="h-screen w-full flex justify-center items-center">
            <p className="mr-5">Name:</p>
            <input type="text" className="border border-black rounded p-2" size="10" onChange={(e) => setName(e.target.value)} />
            <p className="ml-3">Hi 11v,  </p>
            
            {name==("") ? (<><p className="ml-3" > Suragch</p></>) : <p className="ml-3">{name}</p> }
            
        </div>
    )
}