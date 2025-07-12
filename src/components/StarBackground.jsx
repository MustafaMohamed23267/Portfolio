import { useEffect, useState } from "react"

export const StarBackground = ()=>
    {
        const[stars , setStars] = useState([]);
        const[meteors,setMeteors] = useState([]);

        useEffect(()=>{
            GenerateStars();
            GenerateMeteors();
            
        },[]);

        const GenerateStars = ()=>
            {
                const NumberofStars = Math.floor((window.innerWidth * window.innerHeight)/5000);

                const newStars = [];

            for (let i = 0; i < NumberofStars; i++) {
                newStars.push(
                   {
                    id:i,
                    size: Math.random()*3 + 1,
                    x: Math.random()*100,
                    y: Math.random()*100,
                    opacity: Math.random()*0.5 + 0.5,
                    animationDuation: Math.random()*4 + 6,

                    }
                    )
                 }
                 setStars(newStars);
            };


            const GenerateMeteors = ()=>
            {
                const NumberofMeteors = 17;

                const newMeteors = [];

            for (let i = 0; i < NumberofMeteors; i++) {
                newMeteors.push(
                   {
                    id:i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 130,
                    y: Math.random() * 20,
                    delay: Math.random() * 15,
                    animationDuation: Math.random() * 3 + 3,

                    }
                    )
                 }
                 setMeteors(newMeteors);
            };

            return(<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none ">
                {stars.map(star=>(<div
                key={stars.id} className="star " style={{
                            width:star.size+"px",
                            height:star.size+"px",
                            left:star.x+"%",
                            top:star.y+"%",
                            opacity:star.opacity,
                            animationDuration:star.animationDuation+"s",
                                }}              
                />)
                )
                }

                 {meteors.map(meteor=>(<div
                key={stars.id} className="meteor" style={{
                            width:meteor.size * 40 +"px",
                            height:meteor.size * 2 +"px",
                            left:meteor.x+"%",
                            top:meteor.y+"%",
                            animationDelay:meteor.delay,
                            animationDuration:meteor.animationDuation+"s",
                                }}              
                />)
                )
                }
            </div>)
            
    };