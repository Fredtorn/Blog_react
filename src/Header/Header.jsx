import React from "react"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="box-border flex justify-between">
            <div>
                <h1>LOGO</h1>
            </div>
            <div>
                <Link to="/" className="p-4">LandingPage</Link>
                <Link to="/myblog" className="p-4">My blog</Link>
                <Link to="/newpost" className="p-4">New post</Link>
            </div>
        </header>
    )
}

export default Header;