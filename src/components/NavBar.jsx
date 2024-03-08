/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
import ActiveLink from './ActiveLink/ActiveLink';

const NavBar = () => {
    const {user , logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-slate-200">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/home'>Home</Link>
                    <Link to='blog'>Blog</Link>
                    {/* <Link>About Us</Link> */}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Roof Royal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
    
                    <li>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink  to='/blog'>Blog</ActiveLink>
                    </li>
                   
  
                </ul>
            </div>
            <div className="navbar-end">
                {user && <label tabIndex={0} style={{fontSize:35}}>
                    {/* <div className="w-10 rounded-full">
                        <FaUserCircle/>
                    </div> */}
                    <img src={user.photoURL} alt="" className='w-12 h-12 mr-4 rounded-full' />
                </label>}
                <div>
                {user ? 
                        <button onClick={handleLogOut} className="btn">Log Out</button>:
                        <Link to='/login'><button className="btn">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;