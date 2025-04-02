import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [signIn, setSingIn] = useState(true);
    const toggleSignInForm = () => {
        setSingIn(!signIn);
    }
    return (
        <div className="relative w-full h-screen">
            <Header />
            <div className="absolute top-0 left-0 w-full h-full">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <form className="relative p-12  bg-black bg-opacity-30 backdrop-blur-md  border-opacity-300 text-white rounded-lg z-10 w-96">
                    <h2 className="text-2xl font-bold mb-4 text-center">{signIn ? "Sign In" : "Sign Up"}</h2>
                    {!signIn && (<input
                        type="text"
                        placeholder="Enter the Name"
                        className="w-full p-2 my-2 bg-white text-black rounded
                        "
                    />)}
                    <input
                        type="text"
                        placeholder="Enter the email"
                        className="w-full p-2 my-2 bg-white text-black rounded"
                    />
                    <input
                        type="password"
                        placeholder="Enter the password"
                        className="w-full p-2 my-2 bg-white text-black rounded"
                    />
                    <button className="w-full bg-red-600 py-2 mt-4 rounded text-white font-bold hover:bg-red-700">
                        {signIn ? "Sign In" : 'Sign Up'}
                    </button>
                    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {signIn ? "New to Netflix" : "Already Register"} | Sign In Now  </p>
                </form>
            </div>
        </div>
    )
}

export default Login
