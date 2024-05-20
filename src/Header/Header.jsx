import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

const Header = () => {

    const { userName, isLoggedIn, login, logout } = useAuth();

    return (
        <header className="box-border flex justify-between m-5">
            <div>
                <h1 className="font-bold font-serif text-4xl">B.</h1>
            </div>
            {isLoggedIn && (

                <div className="flex justify-between">
                    <Link to="/" className="p-4">LandingPage</Link>
                    <Link to="/myblog" className="p-4">My blog</Link>
                    <Link to="/newpost" className="p-4">New post</Link>
                    <p className="p-4">{userName}</p>
                </div>


            )}
            {isLoggedIn ? (
                <button onClick={logout} className="p-4">Log Out</button>
            ) : (
                <button onClick={login} className="p-4">Log In</button>
            )}
        </header>
    )
}

export default Header;