
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";
import axios from "axios";
import { useState, useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";

const proxyUrl = import.meta.env.VITE_BACKEND_PROXY_URL 


function Login() {
    const { login } = useContext(ProgressContext);
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Sending request to the proxy server to fetch Google Sheet data
            const response = await axios.post(proxyUrl, {
                endpoint: "sheet",  // Specify "sheet" for retrieving data
            });

            const sheetData = response.data.values;

            if (!sheetData || sheetData.length === 0) {
                setError('No data found in Google Sheet.');
                return;
            }

            const headers = sheetData[0];
            const data = sheetData.slice(1).map(row => {
                let obj = {};
                row.forEach((value, index) => {
                    obj[headers[index].toLowerCase()] = value;
                });
                return obj;
            });

            // Searching for the user matching the identifier and password
            const user = data.find(row =>
                (row.email.toLowerCase() === identifier.toLowerCase() || row.username.toLowerCase() === identifier.toLowerCase()) && row.password === password
            );

            if (user) {
                const userId = user.userid;
                if (userId) {
                    // Update ProgressContext with the logged-in user's id
                    login(userId);

                    // Save user info in localStorage
                    localStorage.setItem('loggedInUser', user.username || user.email);

                    setSuccess("Logged in successfully!");
                    setError('');
                    setTimeout(() => {
                        navigate('/');  // Redirect to homepage or dashboard
                    }, 2000);
                } else {
                    setError('User ID is missing in the data.');
                }
            } else {
                setError('Invalid email/username or password.');
                setSuccess('');
            }
        } catch (error) {
            console.error('Error fetching Google Sheet data:', error);
            setError('Something went wrong while fetching data.');
            setSuccess('');
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm border border-grey-200 shadow-2xl rounded-lg p-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-12 w-auto" src={Logo} alt="Learniverse" />
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">Login</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Username or Email</label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-600 sm:text-sm"
                                    name="identifier"
                                    placeholder="Username or Email"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                            </div>
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
                                Login
                            </button>
                        </div>

                        {error && <div className="text-red-500">{error}</div>}
                        {success && <div className="text-green-500">{success}</div>}
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't Have an account?
                        <Link to="/signup" className="font-semibold text-cyan-600 hover:text-cyan-500">Sign Up Here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;