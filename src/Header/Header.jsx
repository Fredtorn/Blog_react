import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
import { signOutUser } from "../firebase/auth"

const Header = () => {

    const { currentUser, userLoggedIn } = useAuth()

    return (
        <header className="box-border flex justify-between m-5">
            <div>
                <Link to={"/"} className="font-bold font-serif text-4xl">B.</Link>
            </div>
            {userLoggedIn ? (
                <>
                    <div className="p-4">
                        <Link to="/" className="p-4 hover:underline">Home</Link>
                        <Link to="/myblog" className="p-4 hover:underline">My blog</Link>
                        <Link to="/newpost" className="p-4 hover:underline">New post</Link>
                    </div>
                    <div className="flex">
                        <p className="p-4">{currentUser.displayName || currentUser.email}</p>
                        <button onClick={signOutUser} className="p-4">Log Out</button>
                    </div>
                </>
            ) : (
                <Link to="/login" className="ml-5">
                    Log in
                </Link>
            )}
        </header>
    );
}

export default Header;