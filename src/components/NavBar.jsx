import { useEffect, useState } from "react";
import { Themetoggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import mostafa from "../assets/logo/mdlogo.png";

const NavItems = [
    {name:"Home",href:"#hero"},
    {name:"About",href:"#about"},
    {name:"Skills",href:"#skills"},
    {name:"Projects",href:"#projects"},
    {name:"Contact",href:"#contact"},
]


export const NavBar = ()=>
    {
        const [menu , setMenu] = useState(false);

        const [shownav , setShownav] = useState(true);
        const [lastscroll,setLastscroll] = useState(0);


        useEffect(()=>
            {
                const handelscroll=()=>
                    {
                        const currentscroll = window.scrollY;
                        if (currentscroll > lastscroll && currentscroll > 50)
                            {
                                setShownav(false);
                            }
                            else
                            {
                                setShownav(true);
                            }

                            setLastscroll(currentscroll);
                    }
                    window.addEventListener("scroll",handelscroll);
                    return ()=> window.removeEventListener("scroll",handelscroll);
            },
        [lastscroll]);

        const [isScrolled , setIsScrolled] = useState(false);
        useEffect(()=>{
            const handelnavscroll =()=>{
                setIsScrolled(window.scrollY > 10);
            } 
            window.addEventListener("scroll",handelnavscroll);
            return()=> window.removeEventListener("scroll",handelnavscroll);
        },[])

  




        return(

            // return nav items
            <nav id="nav" className={`fixed w-full py-5 z-50 transition-all duration-500 md:${shownav?"opacity-1":" opacity-0"} md:${isScrolled ? "py-1  backdrop-blur-md shadow-md  ":"py-5"} `}>
                <div className=" flex items-center justify-around">
                    <div className="flex space-x-4 items-center">
                    <img className="drop-shadow-lg drop-shadow-indigo-500/40" src={mostafa} width="40px" height="40px" alt="batman"/>
                    <a href="#hero" className="text-xl font-bold cursor-pointer">
                        
                        <span >
                            
                            Mustafa
                            <span className="text-glow text-indigo-500"> Portfolio</span>
                        </span>
                    </a></div>

                    <div className="max-sm:hidden navbar-animation z-50 navshadow space-x-2  rounded-full p-1 ">
                        {NavItems.map(items =>
                            (
                                <a href={`${items.href}`} className="px-3  hover:text-primary hover:font-semibold  rounded-full fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/40 duration-400 "  onClick={setIsScrolled} >{items.name}</a>
                            ))}
                    </div>
                    

                    {/* theme dark or light */}
                    <div className="max-sm:absolute bottom-0 left-0 size-16 "> <Themetoggle/></div>
                    

                    {/* Mobile */}
                    <button className="md:hidden z-50" onClick={()=>setMenu((prev)=>!prev)}>{menu?<X className="cursor-pointer hover:text-red-500 "
                    /> : <Menu className="hover:text-indigo-500 cursor-pointer"/>}</button>

                   <div className={` fixed inset-0 bg-background/70 backdrop-blur-md flex flex-col items-center justify-center z-40  transition-all duration-400 md:hidden ${menu? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                
                         <div className=" flex flex-col space-y-8">
                         
                        {NavItems.map(items =>
                            (
                            
                                <a className="px-3  text-center hover:bg-indigo-500 rounded-full fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 duration-400" href={items.href} >{items.name}</a>
                            ))}
                        </div>
                   </div>
                </div>
            </nav>
        );

    };