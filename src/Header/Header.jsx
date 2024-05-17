import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

const Header = () => {

    const { isLoggedIn, login, logout } = useAuth();

    return (
        <header className="box-border flex justify-between m-5">
            <div>
                <h1 className="font-bold font-serif text-4xl">B.</h1>
            </div>
            {isLoggedIn && (
                <>
                    <Link to="/" className="p-4">LandingPage</Link>
                    <Link to="/myblog" className="p-4">My blog</Link>
                    <Link to="/newpost" className="p-4">New post</Link>
                </>
            )}
            {isLoggedIn ? (
                <button onClick={logout}>Log Out</button>
            ) : (
                <button onClick={login}>Log In</button>
            )}
        </header>
    )
}

export default Header;