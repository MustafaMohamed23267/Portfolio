import { Github, GithubIcon } from "lucide-react";
import ecommerce from "../assets/ecommerce.jpg"
import learning from "../assets/learning.png"
import pharmacy from "../assets/pharmacy.jpeg"


const myprojects=[
    {
        name:"E-Commerce",
        tools:[
            {
                name:"PHP"
            },
            {
                name:"HTML"
            },{
                name:"CSS"
            },
            {
                name:"React"
            },
            {
                name:"MYSQL"
            }
        ],
        desc:"it is a website used for marketing online ",
        img:ecommerce
    },
     {
        name:"Learning",
        tools:[
            {
                name:"PHP"
            },
            {
                name:"HTML"
            },
            {
                name:"CSS"
            },
            {
                name:"JavaScript"
            },
            {
                name:"MYSQL"
            }
        ],
        desc:"it is a website used for learning online ",
        img:learning
    },
     {
        name:"Pharmacy",
        tools:[
            {
                name:"PHP"
            },
            {
                name:"HTML"
            },
            {
                name:"Laravel"
            },
            {
                name:"CSS"
            },
            {
                name:"MYSQL"
            }
        ],
        desc:"it is a website used for buying medicine online ",
        img:pharmacy
    }

];

export const ProjectsSection =()=>
    {
        return(
            <section id="projects" className="my-10 relative ">
                <div className="  space-y-8 px-10 ">
                    <div className="text-center z-50">
                        <h1 className="text-2xl md:text-3xl font-bold z-50"> My <span className="text-primary">Projects</span></h1>
                    </div>

                      
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {myprojects.map((project,key)=>
                            <div key={key} className="card-hover bg-card z-40 space-y-6 pb-4 ">
                                <img className="w-full h-[250px]" src={project.img}/>
                                <div className="flex flex-col space-y-3">
                                    <h2 className="font-semibold text-lg">{project.name}</h2>
                                        <div className="space-x-2">
                                        {project.tools.map((tool,key)=><span key={key} className="bg-primary p-2 rounded-full">{tool.name}</span>)}
                                        </div>
                                    <span>{project.desc}</span>
                                </div>
                                <div className=" pl-2" >
                                    <a href="#"><Github size="30px" className=" rounded-full animate-pulse bg-primary"/></a>
                                    
                                </div>
                                
                                
                            </div>
                            )}
                    </div>
                </div>
            </section>
        )
    }