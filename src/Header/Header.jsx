import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
import { signOutUser } from "../firebase/auth"

const Header = () => {

    const { currentUser, userLoggedIn } = useAuth()

    console.log(currentUser)
    return (
        <header className="box-border flex justify-between m-5">
            <div>
                <h1 className="font-bold font-serif text-4xl">B.</h1>
            </div>
            {userLoggedIn ? (
                <div className="flex justify-between">
                    <Link to="/" className="p-4">LandingPage</Link>
                    <Link to="/myblog" className="p-4">My blog</Link>
                    <Link to="/newpost" className="p-4">New post</Link>
                    <p className="p-4 pl-20">{currentUser.displayName || currentUser.email}</p>
                    <button onClick={signOutUser} className="p-4">Log Out</button>
                </div>
            ) : (
                <Link to="/login" className="ml-5">
                    Log in
                </Link>
            )}
        </header>
    );
}

export default Header;