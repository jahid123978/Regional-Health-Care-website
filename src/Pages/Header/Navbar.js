import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';
    

const Navbar = () => {
  const {user, LogOut} = useAuth();
  console.log(user.displayName);
    return (
        <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <img style={{width: '30%', height: '40%'}} src="https://regionalonehealth-valeoonlinemarke.netdna-ssl.com/wp-content/uploads/2016/11/regional_one_logo_600x88_@2x.png?x16063" alt="" />
            <NavLink to='/home' activeStyle>
             Home
            </NavLink>
            <NavLink to='/doctor' activeStyle>
              Find Doctors
            </NavLink>
            <NavLink to='/about' activeStyle>
              About us
            </NavLink>
            {/* <NavLink to='/team' activeStyle>
              Teams
            </NavLink>
            <NavLink to='/blogs' activeStyle>
              Blogs
            </NavLink> */}
           
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
         
          {/* <NavBtn>
            { user.email && <NavLink>
              {user.displayName}
            </NavLink>}
        {user.email? <button onClick={LogOut}>Logout</button> 
        : <NavLink to='/login' activeStyle>
              Login
            </NavLink>}
            <NavBtnLink to='/register'>Sign Up</NavBtnLink>
          </NavBtn> */}
         <NavMenu to="">
         {user.email && <Link style={{marginRight: '10px', color: 'white'}} to="">{user.displayName}</Link>}
          {user.displayName? <button onClick={LogOut}>Logout</button> :
          <Link style={{color: 'white'}} to="/login">Login</Link>}
         </NavMenu>
          
        </Nav>
      </>
    );
};

export default Navbar;