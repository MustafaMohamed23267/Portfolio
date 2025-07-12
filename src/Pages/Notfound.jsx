import { Link } from "react-router-dom"

export const NotFound =()=>{
    return <div className="bg-gray-900 flex flex-col items-center justify-center h-[100vh] space-y-8">
              <h1 className="text-white font-bold text-4xl">404 Page Not Found</h1>
             <div><Link to={'/'}><button className="p-3 cursor-pointer text-lg text-white rounded-lg bg-green-700 hover:bg-green-900 transition-all duration-300">Home page</button></Link> </div>
    </div>
}