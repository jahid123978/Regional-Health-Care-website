import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const {handleSignUpGoogle, handleLoginProcess, handleResetPassword, handleEmail, handleSignUpGithub} = useAuth();
  
    const handleGoogleLogin = () =>{
      handleSignUpGoogle()
      .then(res =>{
          history.push(redirect_url);
      })
}
    return (
        <div className="w-full flex items-center justify-center bg-gray-800">
        <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
      <label className="text-3xl mb-12">PROGRAMMING<span className="font-bold"></span></label>
      <form onSubmit={handleLoginProcess}>
      <input onBlur={handleEmail} type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Email"/>
      <input type="password" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Password"/>
      <input className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4" type="submit" value="Login"/>
      <button onClick={handleResetPassword} className="w-full h-12 rounded-lg bg-green-500 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Forgot password</button>
      </form>
      
      <label className="text-gray-800 mb-4">or</label>
      <button onClick={handleGoogleLogin} className="w-full h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">Sign with Google</button>
      <Link to="/register" className="w-full h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">Don't account Sign Up</Link>
      
  </div>
    </div>
    );
};

export default Login;