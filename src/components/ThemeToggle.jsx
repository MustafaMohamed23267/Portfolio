import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export const Themetoggle = ()=>{
const [isDark , setIsDark]=useState(false);
   const toggletheme = ()=>
    {
        if(isDark)
            {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme","light");
                setIsDark(false);
            }
            else{ 
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme","dark");
                setIsDark(true);

            }
    }
useEffect(()=>
    {
        const StoredTheme = localStorage.getItem("theme");
        if(StoredTheme === "dark")
            {
                setIsDark(true);
                document.documentElement.classList.add("dark");
            }
            else
            {
                 document.documentElement.classList.remove("dark");
                localStorage.setItem("theme","light");
            }
    },[])
    
    return (
       
            <button 
            className="max-md:hidden cursor-pointer fixed top-5 right-5 p-2 transition-colors rounded-full focus:outline-hidden" onClick={toggletheme}>
            {isDark? <Sun className="h-6 w-6  text-yellow-400 hover:text-yellow-600 duration-500 "/>  : 
            <Moon  className="h-6 w-6 text-blue-500  hover:text-blue-700 duration-500"/>} 
            </button>
       
    );
};