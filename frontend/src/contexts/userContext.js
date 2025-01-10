import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Custom hook to use the context
export const useUser = () => useContext(UserContext);

// UserProvider component
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(() => {
        // Initialize user ID from localStorage (if exists)
        return localStorage.getItem("userId") || null;
    });

    const login = (id) => {
        setUserId(id);
        localStorage.setItem("userId", id); // Store only the user ID
    };

    const logout = () => {
        setUserId(null);
        localStorage.removeItem("userId"); // Clear user ID from localStorage
    };

    return (
        <UserContext.Provider value={{ userId, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
