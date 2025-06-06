
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";
import axios from "axios";
import { useState } from "react";

const proxyUrl = import.meta.env.VITE_BACKEND_PROXY_URL 

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(proxyUrl, {
                endpoint: "script",  // Use the "script" endpoint defined in your Express backend
                username,
                email,
                password
            });
            if (response.data.error) {
                setError('Error creating user.');
            } else {
                setSuccess('User created successfully!');
                setUsername('');
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            setError('Something went wrong.');
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-200 shadow-2xl rounded-lg p-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-12 w-auto" src={Logo} alt="Learniverse" />
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">Sign Up</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSignUp}>
                        <div>
                            <label className="block text-sm font-medium text-gray-900">Username</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-600 sm:text-sm"
                                    name="username"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-600 sm:text-sm"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-900">Password</label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-600 sm:text-sm"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                            >
                                Sign Up
                            </button>
                        </div>

                        {error && <div className="text-red-500">{error}</div>}
                        {success && <div className="text-cyan-600 text-center">{success}</div>}
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already Have an account?
                        <Link to="/login" className="font-semibold text-cyan-600 hover:text-cyan-500">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;