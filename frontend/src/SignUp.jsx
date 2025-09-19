const SignUp = () => {
    return (
        <div className=" flex flex-col  items-center mt-10 gap-6">
            <h1 className="text-5xl text-bold text-blue-500 ">JOIN BLOG-VERSE</h1>
            <p className="text-gray-700 text-center text-semibold text-xl">create your account and <br></br>start Blogging journey today</p>
            <form className="flex flex-col border-2 py-5 items-center w-1/3 gap-4 ">
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p>FullName</p>
                    <input type="text" placeholder="Enter your FullName" className="border-1 rounded-xl pl-2 w-full p-3 px-4 rounded-2xl focus:outline-non  focus:border-blue-950" />


                </div>
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p>EMAIl</p>
                    <input type="email" placeholder="Enter your Email" className="border-1 rounded-xl pl-2 w-full p-3 px-4 rounded-2xl focus:outline-non  focus:border-blue-950" />


                </div>
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p>PASSWORD</p>
                    <input type="password" placeholder="Enter your password" className="border-1 rounded-xl pl-2 w-full p-3 px-4 rounded-2xl focus:outline-non  focus:border-blue-950" />


                </div>
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p>COMFRIM PASSWORD</p>
                    <input type="tepassword" placeholder="Re-enter password" className="border-1 rounded-xl pl-2 w-full p-3 px-4 rounded-2xl focus:outline-non  focus:border-blue-950" />


                </div>
                

            </form>
        </div>

    )
}
export default SignUp
