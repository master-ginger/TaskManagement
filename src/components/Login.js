import { useState, } from "react";
import { Link ,useNavigate} from "react-router-dom";
export default function Login({setIsAuthenticated}){
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleLogin=()=>{
        if (password==='user'){
            setIsAuthenticated(true);
            navigate('/main');
        }
        else{
            alert('Incorrect Password')
        }
    }
    return(
        <div className="flex justify-center ">
            <div className="w-2/3">
            <div className="lg:mt-[203px] text-center"></div>
            <div className="lg:text-5xl font-bold font-mono  lg:mb-[20px] text-center">Login to your account</div><br/>
            <div className="flex justify-center">
                <div className="lg:mx-10 lg:h-[425px] ">
                    <input type="email" id="username" className="bg-[#e0e0e0] px-3 py-2 rounded-3xl w-[300px] " placeholder="Email"/><br/><br/>
                    <input type="password" id='pass' className="bg-[#e0e0e0] px-3 py-2 rounded-3xl w-[300px]" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    <div className="text-green-800">Password is: user</div><br/><br/>
                    <div className="flex justify-center"><Link to="/main"><button className="bg-cyan-600 lg:w-[180px] py-2 rounded-3xl font-semibold text-lg text-white" onClick={handleLogin} >Sign in</button></Link></div>
                </div>
            </div>
            </div>
            <div className="bg-cyan-600 w-1/3 flex justify-center items-center text-center text-white ">
            <div>
                <div className="font-mono text-5xl font-bold lg:mb-2">New here?</div>
                <div className="lg:mb-2">Join us and take control of your tasks today</div>
                <div><Link to="/sign"><button className="bg-white text-black lg:w-[150px] lg:py-2 rounded-3xl">Sign Up</button></Link></div>
                </div>
            </div>

        </div>
    )
}