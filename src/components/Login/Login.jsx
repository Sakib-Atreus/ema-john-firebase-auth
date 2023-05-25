import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false);

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Hey... <br/>Login Here Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter email address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered" />
                            <p onClick={() => setShow(!show)} className='text-end text-blue-700'><small>
                                {
                                    show ? <span>Hide Password</span> : <span>Show Password</span>
                                }
                                </small></p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p className='text-gray-500 text-2xl'>___________ or ___________</p>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="btn bg-white text-black hover:text-white"><FcGoogle className='me-2 text-xl'/> Login with Google</button>
                        </div>
                    </form>
                    <p><small>New to Ema-John? <Link to="/signup" className='btn-link'>Create New Account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;