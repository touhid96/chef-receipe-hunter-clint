/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext, auth } from '../providers/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {signIn, provider, githubProvider} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        if(password.length < 6){
            setError('password must be 6 character long')
            return
        }

        signIn(email, password)
            .then(result =>{
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, {replace: true})
                setSuccess('User login Successfuly')

            })
            .catch(error =>{
                 console.log(error)
                 setError(error.message)
            })

    }
    const handleGoogleLogin = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const loggedInUser = result.user;
            navigate(from, {replace: true})
        })
        .catch(error =>console.log('error', error.message))
    }
    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const githubUser = result.user;
            navigate(from, {replace: true})
        })
        .catch(error => console.log('error', error.message))
    }
    return (
            <div className="hero bg-base-200">
                    <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                        <label className="label">
                            <p>New To Roof Royal Please <Link to='/register'><button className="btn btn-link">Register</button></Link></p>
                        </label>
                        </div>
                            <p className='text-red-800'>{error}</p>
                            <p className='text-green-600'>{success}</p>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <h3 className='mx-auto'>Register with another account</h3>
                        <div>
                        <button onClick={handleGoogleLogin} className="btn btn-outline btn-info btn-block "><small className='text-2xl text-teal-950 mr-2'><FaGoogle/></small> Login With Google</button>
                        <h3 className='text-center text-2xl font-semibold'>Or</h3>
                        <button onClick={handleGithubLogin} className="btn btn-outline btn-accent  btn-block"><small className='mr-2 text-2xl text-blue-800'><FaGithub/></small> Login With Github</button>
                        </div>
                    </div>
                        
                    </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;