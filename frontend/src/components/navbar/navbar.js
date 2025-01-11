import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useUser} from "../../contexts/userContext";

const Navbar = () => {
    const { logout } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Clear user context and localStorage
        navigate("/"); // Redirect to login page
    };

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex justify-around">
                <li>
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                
                <li>
                    <button
                        onClick={handleLogout}
                        className="hover:underline bg-red-500 px-3 py-1 rounded"
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
