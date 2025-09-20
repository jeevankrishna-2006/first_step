import NavBar from './NavBar.jsx'
import { CircleUser } from 'lucide-react';
import { Link } from "react-router-dom"
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';

const SignUp = () => {
    const [formData,setFormData]=useState({
        fullname:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const[Var,setVar]=useState(false)
{
    Var &&<h1>var is true</h1>
}
    const [showPassword, setShowPassword] = useState(false)
    const [showConPassword, setShowConPassword] = useState(false)
    const [error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!formData.fullname||!formData.email||!formData.password||!formData.confirmpassword){
            setError("Please Fill All The Fields")
            setSuccess('')
        }
        else if(formData.password!==formData.confirmpassword)
        {
            setError("Your passwords are not same")
            setSuccess('')
        }
        else{
            setSuccess("You Are Successfully Created")
            setError('')
            setFormData({
                fullname:"",
                email:"",
                password:"",
                confirmpassword:""
            })
        }
    }

    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    const handleConPassword = () => {
        setShowConPassword((password) => !password)
    }
    const handleChange=()=>
    {
        setFormData((formData)=>({
            ...formData,
            [event.target.name]:event.target.value
        }))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans  ">
            <NavBar />

            <h1 className="text-5xl text-bold text-blue-500 flex justify-center m-15 ">JOIN BLOG-VERSE</h1>
            <p className="text-zinc-200 text-center text-semibold text-xl">create your account and start <br></br>Blogging journey today</p>
            <div className='flex justify-center items-center m-9 '>
                <form onSubmit={handleSubmit} className="flex flex-col border-2 py-5 items-center w-110 h-fit gap-4 text-shadow-white bg-black">
                    <div className="w-[90%] flex flex-col gap-2 relative">
                        <p>FullName</p>
                        <input  value={formData.fullname} onChange={handleChange} type="text" name="fullname" placeholder="Enter your FullName" className=" pl-13 border-1 rounded-xl pl-2 w-full p-3 px-4 rounded-2xl focus:outline-non  focus:border-blue-950" /><User className='absolute top-12 left-2' />


                    </div>
                    <div className="w-[90%] flex flex-col gap-2 relative ">
                        <p>EMAIl</p>
                        <input  value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter your Email" className=" pl-13 border-1 rounded-xl pl-2 w-full p-3 px-4 rounded-2xl focus:outline-non  focus:border-blue-950" /><Mail className='absolute top-12 left-2' />

                    </div>
                    <div className="w-[90%] flex flex-col gap-2 relative">
                        <p>PASSWORD</p>
                        <input   value={formData.password} onChange={handleChange} type={showPassword?"text":"password"} name="password" placeholder="Enter your password" className="pl-13 border-1 rounded-xl pl-2 w-full p-3 px-4 rounded-2xl focus:outline-non  focus:border-blue-950" /><KeyRound className='absolute top-12 left-2 text-blue-400' /><p onClick={handlePassword}>{showPassword ? <Eye className='absolute top-12 right-4' /> : <EyeOff className='absolute top-12 right-4' />}</p>


                    </div>
                    <div className="w-[90%] flex flex-col gap-2 relative ">
                        <p>COMFRIM PASSWORD</p>
                        <input   value={formData.confirmpassword} onChange={handleChange} type={showConPassword?"text":"password"} name="confirmpassword" placeholder="Re-enter password" className="pl-13 border-1 rounded-xl pl-2 w-full p-3 px-4 rounded-2xl focus:outline-non  focus:border-blue-950" /><KeyRound className='absolute top-12 text-blue-400 left-2' /><p onClick={handleConPassword}>{showConPassword ? <Eye className='absolute top-12 right-4' /> : <EyeOff className='absolute top-12 right-4' />}</p>


                    </div>
                    {error && <p className='text-red-700'>{error}</p>}
                    {success && <p className='text-green-600'>{success}</p>}
                    <div className='fiex justify-center flex col border-2 rounded items-center h-10 w-95 '><input className='h-5 pl-2' type="checkbox" name="" />
                        <p >I agree to the <a href='#' className='hover:underline text-purple-500'>Terms of Service</a> and <a href="#" className='text-purple-500 hover:underline'>Privacy Policy</a></p>

                    </div>
                    <button type="submit" className="m-3 bg-blue-600 hover:bg-blue-700 text-white px-20 py-2 rounded-full flex justify-center align-middle "><CircleUser />Create Account</button>
                    <div className='border-1 w-90'></div>
                    <p>Already have an account? <a href='#' className="hover:underline text-purple-500">Sign IN</a></p>
                </form>
            </div>
        </div>

    )
}
export default SignUp
