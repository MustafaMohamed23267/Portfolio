import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = ()=>
    {
        return(
            <section id="about" className="py-24 px-4 relative space-y-10 ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold text-center">
                    About <span className="text-primary">Mustafa</span>
                </h2>

 <div className="grid grid-col-2 md:grid-cols-2 gap-12 text-center pt-6 ">
            <div className="space-y-6 ml-2">
                <h3 className="text-2xl font-semibold">Passionate Fullstack Web Developer</h3>
                <p className="text-foreground text-sm">
                    i am a very ambition fullstack web developer i have passion and dedication to do something great at my work and leave my name in this world 
                </p>
                <p className="text-foreground text-sm">
                    i have learned HTML, CSS, Tailwindcss, Reactjs and JaveScript as frontend developer and also i have learned PHP, Laravel, MYSQL and Rest API as backend developer 
                </p>
                <p className="text-foreground text-sm">
                    i have made projects like an E-Commerce website using react and laravel and Rest Api 
                </p >
                <div className="space-x-4">
                    <a href="#contact" className="cosmic">Contact me</a>
                    <a className="border border-indigo-500 rounded-full p-2 hover:bg-indigo-500 hover:text-white text-indigo-500  shadow hover:shadow-2xl duration-300 cursor-pointer">Download my CV</a>
                </div>
                </div>
                
                {/*  */}

                <div className=" gap-6 flex flex-col">
                     <div className=" gradient-border p-4 card-hover flex items-start">
                        <div className="text-primary p-2">
                            <Code/>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl text-card2">
                                Web Evelopment
                            </h3>
                            <p className="text-card2">php , laravel and MYSQl</p>
                        </div>
                      </div>  

                      <div className="gradient-border p-4 card-hover flex items-start">
                        <div className="text-primary p-2">
                            <User/>
                        </div>
                        <div className="text-left ">
                            <h3 className="text-xl text-card2">
                                Web Evelopment
                            </h3>
                            <p className="text-card2">php , laravel and MYSQl</p>
                        </div>
                      </div>  

                      <div className="gradient-border p-4 card-hover flex items-start">
                        <div className="text-primary p-2">
                            <Briefcase/>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl text-card2">
                                Web Evelopment
                            </h3>
                            <p className="text-card2 ">php , laravel and MYSQl</p>
                        </div>
                      </div>  
                    </div>

</div>

             
            </div>

         
        </section>
        )
        
    }