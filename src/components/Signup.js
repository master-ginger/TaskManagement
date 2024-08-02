import { Link } from "react-router-dom";

export default function Signup(){
    return(
    <div className="lg:pt-[200px]">
        <div className="lg:text-4xl font-mono font-bold text-center lg:mb-3">Sign up</div>
    <div className="flex justify-center items-center">
                <div className="lg:mx-10">
                <input type="text" className="bg-[#e0e0e0] px-3 py-2 rounded-3xl w-[300px] " placeholder="Username"/><br/><br/>
                    <input type="email" className="bg-[#e0e0e0] px-3 py-2 rounded-3xl w-[300px] " placeholder="Email"/><br/><br/>
                    <input type="password" className="bg-[#e0e0e0] px-3 py-2 rounded-3xl w-[300px]" placeholder="Password"/><br/><br/>
                    <div className="flex justify-center"><Link to="/"><button className="bg-cyan-600 lg:w-[180px] py-2 rounded-3xl font-semibold text-lg text-white">Sign in</button></Link></div>
                </div>
    </div>
    </div>
    )
}