
import { useEffect, useState } from 'react';
import {sendPasswordResetEmail, updateProfile, sendEmailVerification, signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup,
    onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/Firebase.init';


initializeAuthentication()
const useFirebase = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);
     const [user, setUser] = useState({});
      const auth = getAuth();
      const GoogleProvider = new GoogleAuthProvider();
      
  
      const handleName = name =>{
        setUser(name.target.value);
      }
      const handleEmail = email =>{
        setEmail(email.target.value);
      }
      const handlePassword = password =>{
        setPassword(password.target.value);
      }
  
      const handleRegistation = e =>{
        e.preventDefault();
  
      newUserRegistation(email, password);
         setIsLogin(false);
        
        
        console.log(email, password);
  
  
      }
  
      const handleLoginProcess = e =>{
        e.preventDefault();
        loginProcess(email, password);
        setIsLogin(false);
        console.log(email, password);
      }
  
      const loginProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          setError('');
        })
        .catch(error => {
          setError(error.message);
        })
  
      }
      const  newUserRegistation = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          verifyEmail();
          setUserName();
          setError('');
        })
        .catch(error => {
           setError(error.message);
        })
      }
  
      const setUserName = () =>{
        updateProfile(auth.currentUser, {
          displayName: user
        })
      }
  
    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
    }
  
     const handleResetPassword = () =>{
      sendPasswordResetEmail(auth, email)
      .then(result => {
       
      })
      .catch(error => {
        setError(error.message);
      })
     }
  
      const handleSignUpGoogle = () =>{
      return (signInWithPopup(auth, GoogleProvider)
          .finally(() => {setIsLogin(false)})
      
      )
        
      }
  
   
    const LogOut = () =>{
      signOut(auth)
      .then(() =>{
          setUser({});
      })
      .catch(error =>{
        const message = error.message;
        setUser(message);
      })
      .finally(() =>setIsLogin(false));
    }
  
   useEffect(() =>{
      onAuthStateChanged(auth, user=>{
           if(user)
            {
               setUser(user);
            }
            else{
              setUser({});
            }
            setIsLogin(false);
         })
     }, [])
  
     const [service, setService] = useState([]);

     useEffect(()=>{
   
          fetch('./services.json')
          .then(res => res.json())
          .then(data=>{
            setService(data);
            console.log(data);
          })

     }, []);

     const [doctor, setDoctor] = useState([]);

     useEffect(()=>{
       fetch('./doctors.json')
       .then(res => res.json())
       .then(information => setDoctor(information));
     }, []);
  
    return{
        service,
        user,
        isLogin,
        doctor,
        handleSignUpGoogle,
        LogOut,
        handleEmail, 
        handlePassword,
        handleName,
        handleRegistation,
        loginProcess,
        handleLoginProcess,
        handleResetPassword,
       
    }
    

}

export default useFirebase;