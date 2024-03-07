'use client'

import { SetStateAction, useState } from "react";
export function ClientCounter() {

    const [Count, setCount] = useState(0);
  return (
   <>
     <span className="text-9xl">{Count}</span>
     <div className="flex items-center">
         <button className="flex items-center justify-center p-2 rounded-xl bg-gray-950 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
         onClick={() => setCount(Count + 1)}
         >
           +1
         </button>
         <button className="flex items-center justify-center p-2 rounded-xl bg-gray-950 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
         onClick={() => setCount(Count - 1)}
         >
           -1
         </button>
       </div>
   </>
  )
}
