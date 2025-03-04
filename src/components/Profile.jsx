

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiAccountCircleFill } from "react-icons/ri";
import { ProgressContext } from '../context/ProgressContext'; // Import ProgressContext

function Profile() {
    const navigate = useNavigate();
    const { logout } = useContext(ProgressContext); // Access logout from ProgressContext
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleLogout = () => {
        // Call logout function from ProgressContext to reset progress
        logout(); // This will reset the user progress in context

        // Remove user data from localStorage
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('userId');
        
        navigate('/'); // Redirect to login page
    };

    const loggedInUser = localStorage.getItem('loggedInUser');

    return (
        <>
            <div className="relative">
                <button type="button" onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
                    <span className="sr-only">Open user menu</span>
                    <RiAccountCircleFill className="w-10 h-10 rounded-full text-cyan-600 mt-2" />
                </button>
                {isProfileDropdownOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">
                                Hi,
                            </span>
                            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                                {loggedInUser}
                            </span>
                        </div>
                        <ul className="py-2">
                            <li>
                                <Link
                                    to="/my-learning"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                >
                                    My Learning
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                                >
                                    Log out
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Profile;
