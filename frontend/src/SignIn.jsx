const SignIn = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans  ">
            
           <div className='flex justify-evenly text-white text-1xl align-middle border-1 items-center p-2'>
            <h1>BLOG VERSE</h1>
            
          <a href="#" className="hover:underline">
            Home
          </a>
            <div className='flex justify-evenly' >
                <p>Sign IN</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full ">Sign Up</button>
            </div>
            </div>
            <div className='flex justify-center items-center h-screen  '>
                <div className='border-2 p-3 mask-origin-fill  flex justify-center flex-col items-center rounded-4xl  border-indigo-700 h-125 w-100 border-gray-700 bg-black '>
                    <div className='flex justify-evenly  items-center '></div>
                    <h1 className='text-2xl'><u><b>SIGN IN</b></u></h1>
                    <p className='text-zinc-400'>Access Your Account</p>
                    <br></br>
                    <form className='flex-col m-5 p-3 '>
                        <h1>Email Address</h1>
                        <input className='m-2 bg-slate-700 border border-white text-white placeholder-neutral-950 rounded px-4 py-1' type="email" placeholder="jeevan1236@gmail.com" name="EMAIL"/>
                        <br></br>
                        <h1>Password</h1>
                        <input className='m-2 bg-slate-700 border border-white text-white placeholder-neutral-950 rounded px-4 py-1' type="password" placeholder="Nanu Chapa" name="PASSWORD"/>
                        <br></br>
                        <div className='gap-6 flex justify-end m-2'>
                           <input type="checkbox" name=""/>
                           <p>Remember Me</p> 
                            <p className='text-blue-600'> <a href="#" className="hover:underline">Forget Password?</a></p>
                        </div>
                        <button className="m-3 bg-blue-600 hover:bg-blue-700 text-white px-20 py-2 rounded-full flex justify-center align-middle ">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        
    )}
export default SignIn