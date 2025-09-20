import NavBar from './NavBar.jsx'
import { CircleUser } from 'lucide-react';
import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
        
    
        const handlePassword = () => {
            setShowPassword((password) => !password)
        }
    return (
        <div className="min-h-screen bg-gradient-to-br bg-black text-white font-sans  ">
            <NavBar/>
            <div className='flex justify-center items-center h-screen  '>
                <div className='border-2 p-3 mask-origin-fill  flex justify-center flex-col items-center rounded-4xl  border-indigo-700 h-125 w-100 border-gray-700 bg-black '>
                    <div className='flex justify-evenly  items-center '></div>
                    <h1 className='text-2xl'><u><b>SIGN IN</b></u></h1>
                    <p className='text-zinc-400'>Access Your Account</p>
                    <br></br>
                    <form className='flex-col m-5 p-3 '>
                        <h1>Email Address</h1>
                        <div className="w-[90%] flex flex-col gap-2 relative">
                        <input className='m-2 pl-10 bg-slate-700 border relative border-white text-white placeholder-neutral-950 rounded px-4 py-1' type="email" placeholder="jeevan1236@gmail.com" name="EMAIL"/><Mail className='absolute text-white bottom-4 left-3'/>
                        </div>
                        <br></br>
                        <h1>Password</h1>
                        <div className="w-[90%] flex flex-col gap-2 relative">
                        <input className='m-2 pl-10 bg-slate-700 border border-white text-white placeholder-neutral-950 rounded px-4 py-1' type={showPassword?"text":"password"} placeholder="Nanu Chapa" name="PASSWORD"/><KeyRound className='absolute bottom-4 left-3'/><p onClick={handlePassword}>{showPassword ? <Eye className='absolute bottom-4 right-4' /> : <EyeOff className='absolute bottom-4.5 right-4' />}</p>
                        </div>
                        <br></br>
                        <div className='gap-6 flex justify-end m-2'>
                           <input type="checkbox" name=""/>
                           <p>Remember Me</p> 
                            <p className='text-blue-600'> <a href="#" className="hover:underline">Forget Password?</a></p>
                        </div>
                        <button className="m-3 bg-blue-600 hover:bg-blue-700 text-white px-20 py-2 rounded-full flex justify-center align-middle "><CircleUser />Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        
    )}
export default SignIn