import { useState } from "react";

        const skills = [
    {name:"html" , level:95 , category:"frontend"},
    {name:"CSS" , level:90 , category:"frontend"},
    {name:"React" , level:80 , category:"frontend"},
    {name:"JavaScript" , level:85 , category:"frontend"},
    {name:"tailwindcss" , level:92 , category:"frontend"},
    {name:"Bootstrap" , level:98 , category:"frontend"},
    

    {name:"PHP" , level:90 , category:"Backend"},
    {name:"Laravel" , level:88 , category:"Backend"},
    {name:"MYSQL" , level:85 , category:"Backend"},
    {name:"Rest Api" , level:80 , category:"Backend"},

    {name:"GIT/GitHub" , level:70 , category:"tools"},
    {name:"Vs Code" , level:100 , category:"tools"},
    
];

const categories = ["all","frontend" ,"Backend","tools"];


export const SkillsSection = ()=>
    {
       const [activecategory,setActivecategory] = useState("all");
       const filterskills = skills.filter(skills=> activecategory==="all" || skills.category === activecategory);


        return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/40">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>


                <div className=" flex flex-wrap space-x-4 justify-center mt-6 mb-6">
                    {categories.map((category,key)=><button 
                    onClick={()=>setActivecategory(category)}
                    className={` px-5 py-2 ${activecategory===category? " bg-gray-500 rounded-full" : "bg-primary rounded-full hover:bg-primary/50 hover:animate-pulse"}`}
                    key={key}>
                        {category}
                    </button>)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6">
                    {filterskills.map((skills,key)=> <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover ">
                            <div className="flex flex-col">
                            <span className=" font-semibold texl-lg">{skills.name}</span>
                                <div className="bg-red-500/50 w-full h-2 mt-1 rounded-full animate-skills overflow-hidden">
                                    <div className=" bg-primary h-2 rounded-full" style={{width:skills.level +"%"}}/>
                                </div>
                                <div className="text-right mt-1">
                                     <span className="text-md">{skills.level} %</span>
                                </div>

                            </div>

                     </div>)}
                </div>

            </div>

        </section>
        );
    }