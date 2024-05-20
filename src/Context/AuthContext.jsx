import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const lsIsLoggedIn = localStorage.getItem("isLoggedIn");
    const [isLoggedIn, setIsLoggedIn] = useState(lsIsLoggedIn);
    const [userName, serUserName] = useState("Fredrika");


    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn", false);
    }

    return (
        <AuthContext.Provider value={{ userName, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);