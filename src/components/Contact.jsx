//import { Instagram } from "@mui/icons-material"
import { Facebook, FacebookIcon, Github, Instagram, Linkedin, LinkedinIcon, LocationEdit, Mail, Send } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"


export const ContactSection = ()=>
    {
        return(
            <section id="contact" className="py-24 px-50 my-10 ">
                <div className="text-center text-2xl md:text-3xl font-bold  space-y-8">
                    <h1> <span className="text-primary ">Contact</span> me</h1>

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className=" space-y-15 py-6 z-40" >
                          <h2 className="text-3xl font-semibold">Contact Information</h2>

                                 {/* my email ,phone , location  */}
                                <div className="space-y-4">

                                  <div className="grid grid-cols-4 ">
                                     <div className=""><BsWhatsapp className="animate-bounce bg-card size-[30px] p-1 rounded-full text-primary "/></div>

                                      <div className="flex flex-col justify-center text-sm">
                                      <span >phone:</span>
                                      <span>+201110792037</span>
                                     </div>   
                                   </div>
                                     {/*  */}
                                    <div className="grid grid-cols-4">
                                      <div className=""><Mail className="animate-bounce bg-card size-[30px] p-1 rounded-full text-primary " /></div>
                                      <div className="flex flex-col text-sm">
                                        <span>mail:</span>
                                        <span>mustafamohamedrady48
                                            @gmail.com</span>
                                      </div>
                                    </div>

                                      {/*  */}
                                     <div className="grid grid-cols-4 ">
                                       <div className=""><LocationEdit className="animate-bounce bg-card size-[30px] p-1 rounded-full text-primary "/></div>
                                        <div className="flex flex-col justify-center text-sm">
                                          <span >loc:</span>
                                         <span>Cairo Egypt</span>
                                        </div>   
                                     </div>
  
                                </div>

                                  
                                 {/* my social emails */}
                                <div className="flex flex-col space-y-4 ">
                                    <span className="text-lg">contact with me </span>
                                    <div className="flex space-x-2 justify-center ">
                                         <a href="https://www.linkedin.com/in/mustafa-mohamed-3378a1360?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bc3bilfqaRmSLtXV2hdSMow%3D%3D"><button className="hover:text-primary duration-300 cursor-pointer"> <LinkedinIcon/>    </button></a>

                                        <a href="https://www.instagram.com/mustafamohamed2610/"><button className="hover:text-primary cursor-pointer duration-300"> <Instagram/>  </button></a>

                                        <a href="https://web.facebook.com/mustafa.mohamed.767342/" ><button className="hover:text-primary duration-300 cursor-pointer"><Facebook/></button></a>

                                        <a href="https://github.com/MustafaMohamed23267"><button className=" hover:text-primary duration-300 cursor-pointer"><Github/> </button></a>
                                    </div>
                                    

                                  </div>
                                  
                                    
                                </div>

                        {/*  */}
                        <div className="bg-card z-40 shadow-xs rounded-xl py-6 md:px-20 px-4 max-sm:w-[380px] max-sm:ml-[-50px] space-y-4">
                           <h2 className="text-3xl font-semibold">Contact Form</h2>
                            <form className="space-y-4 ">
                                <div className="text-md">
                                <label className="text-lg">Enter Name</label>
                                <input type="text" className="contactInput" placeholder="enter your name" />
                                </div>

                                <div className="text-md">
                                <label className="text-lg">Enter Phone</label>
                                <input type="text" className="contactInput" placeholder="+(20)43523687" />
                                </div>

                                <div className="text-md">
                                <label className="text-lg">Enter Email</label>
                                <input type="email" className="contactInput" placeholder="mail@example.com" />
                                </div>

                                <div className="text-md">
                                <label className="text-lg">Enter Message</label>
                                <textarea  className="contactInput" placeholder="" />
                                 </div> 
                                 
                                 <div className="flex justify-center bg-green-600 p-2  text-center text-lg rounded-full">
                                    <button className=" flex cursor-pointer">Send Message <Send/></button>
                                  </div>
                                
                               </form> 

                            
                        </div>

                    </div>
                </div>
            </section>
        )
    }