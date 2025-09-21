import {Link} from "react-router-dom"
import { House } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useState } from 'react';
const NavBar = () => {
  const [showLight, setShowLight] = useState(false)
      const handleMode = () => {
          setShowLight((password) => !password)
      }
    return (
        
    <div className='flex justify-evenly text-xl  text-white bg-black text-2xl align-middle border-1 h-20 items-center p-2'>
            <h1 className='text-xl items-center'><b><u>BLOG VERSE</u></b></h1>
          <div className='relative'>  
          <Link to='/Home' className="hover:underline">
            Home<House className='absolute bottom-0.5 right-13'/>
          </Link>
          </div>
            <div className='flex justify-evenly relative' >
              
              <p onClick={handleMode}>{showLight ? <Sun className='absolute bottom-0.5 right-56' /> : <Moon className='absolute bottom-0.5 left-0.5' />}</p>
                <Link to='/SignIn' className='pr-3 pl-7 pt-1 text-xl' >Sign IN</Link >
                <Link to='/SignUp' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full ">Sign Up</Link>
            </div>
           
        </div>
    )}
    export default NavBar