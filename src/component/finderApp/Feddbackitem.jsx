import React from 'react'
import { useState } from 'react'

export default function Feddbackitem() {
    const [rating, setRating]=useState(7)
    const [text, setText]=useState("  This is an exampple of a feedback Item ")
  
    const handleClick=()=>{
    setRating((prev)=>{
         return prev + 1
        })
    }
    
    return (
        <div className='card'>
            <div className="text-display">
               {rating}
               <button onClick={handleClick}> cLICK MR</button>
            </div>
            
        </div>
    )
}
