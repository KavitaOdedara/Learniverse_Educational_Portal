import { useState } from "react";
import { Navigate, Outlet, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import "../index.css"


const ProtectedRoute = () => {

    const location = useLocation();
    const [showAlert, setShowAlert] = useState(false);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const loggedInUser = localStorage.getItem("loggedInUser");
    console.log(loggedInUser);

    useEffect(() => {
        if (!loggedInUser) {
            setShowAlert(true);
            setTimeout(() => {
                setShouldRedirect(true);
            }, 5000);
        }
    }, [loggedInUser])


    const Alert = () => {
        return (
            <>
                <div className="flex justify-center">
                    <div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <div class="flex items-center justify-center w-12 bg-cyan-500">
                            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                            </svg>
                        </div>

                        <div class="px-4 py-2 -mx-3">
                            <div class="mx-3">
                                <span class="font-semibold text-cyan-500 dark:text-cyan-500">Info</span>
                                <p class="text-sm text-gray-600 dark:text-gray-200">You must Login to access this page </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if (shouldRedirect) {
        return <Navigate to="/login" state={{ from: location }}></Navigate>
    }

    if (!loggedInUser) {
        return (
            <>
                {showAlert && <Alert></Alert>}
            </>
        )
    }
    return <>
        <Outlet />
    </>
}

export default ProtectedRoute;
