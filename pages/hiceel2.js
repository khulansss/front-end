import React, {useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const useStateHook = () => {
  const [color, setColor] = useState("");
  const router = useRouter();
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <button
                                className="  w-[50px] h-[50px] pl-1 ml-3 bg-white rounded-full  " 
                                onClick={() => { router.push("main"); }}
                                aria-label="Go push"
                              >
                                <Image
                                          src="/back.png"
                                          height={30}
                                          width={30}
                                          className="ml-2"
                                          
                                          onClick={() => { router.push("main"); }}
                                          
                                        />
                                
                              </button>
      <p>Ungu solih</p>
      <button
        className="border bg-red-800 py-4 ps-6"
        onClick={() => {
          setColor("red");
        }}
      >
        Ulaan
      </button>;
      <button
        className="border bg-blue-800 py-4 ps-6"
        onClick={() => {
          setColor("blue");
        }}
      >
        Tsenher
      </button>;
      <button
        className="border bg-green-800 py-4 ps-6"
        onClick={() => {
          setColor("green");
        }}
      >
        Nogoon
      </button>
      {color == "red" ? null : <button
        className="border bg-blue-800 py-4 ps-6"
        onClick={() => {
          setColor("blue");
        }}
      >
        Tsenher
      </button> }

      <button
        className="border bg-white py-4 ps-6"
        onClick={() => {
          setColor("white");
        }}
      >
        clear
      </button>
      
    </div>
  );
};
export default useStateHook;
