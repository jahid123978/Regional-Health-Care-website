import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './Register.css'
import { useHistory, useLocation } from 'react-router';


const Register = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const {handleName, handleEmail, handlePassword, handleRegistation, handleSignUpGoogle} = useAuth()
     
    const handleGoogleLogin = () =>{
        handleSignUpGoogle()
        .then(res =>{
            history.push(redirect_url);
        })
    }

    // const handleSignUpRegistation = () =>{
    //     handleRegistation()
    //     .then(res =>{
    //         history.push(redirect_url);
    //     })
    // }
    return (
        <div className="flex justify-center items-center m-0 w-full bg-blue-400">
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
       <h1 className="margin text-gray-800 text-2xl font-bold mb-6">Register</h1>
       <form onSubmit={handleRegistation}>
           <div className="flex flex-col mb-4">
               <label className="margin-l mb-2 font-bold text-lg text-gray-500" htmlFor="name">Name</label>
               <input onBlur={handleName} className="border-r py-2 px-3 text-grey-500" type="text" name="name" id="name" placeholder="Enter name"/>
           </div>
           <div className="flex flex-col mb-4">
               <label className="margin-email mb-2 font-bold text-lg text-gray-500" htmlFor="email">Email</label>
               <input onBlur={handleEmail} className="border-r py-2 px-3 text-grey-800" type="email" name="email" id="email" placeholder=" Enter email"/>
           </div>
           <div className="flex flex-col mb-4">
               <label className="margin-password mb-2 font-bold text-lg text-gray-500" htmlFor="password">Password</label>
               <input onBlur={handlePassword} className="border-r py-2 px-3 text-grey-800" type="password" name="password" id="password" placeholder=" Enter password"/>
           </div>
           <input className=" text-white block bg-blue-700 hover:bg-teal-600 mx-auto p-4 rounded-full py-3 px-6" type="submit" value="Submit"/>
       </form>
       <div>----------------------------------------or-----------------------------------------</div>
       <button onClick={handleGoogleLogin} className=" mt-4 w-full h-12 rounded-3xl border-none bg-red-500 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">Sign Up with Google</button>
      
      
   </div>
</div>
    );
};


export default Register;