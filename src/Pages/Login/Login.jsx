import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { signInUser } from "../../firebase/auth";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            await signInUser(email, password);
            setIsSigningIn(true);
        }
    };

    return (
        <div>
            {userLoggedIn && <Navigate to={"/"} replace={true} />}

            <main className="font-serif font-semibold mt-20 mb-4 flex self-center place-content-center place-items-center">
                <div className="flex flex-col border-2 border-solid border-black w-1/4 h-full p-5">
                    <div className="text-center">
                        <div className="mt-2">
                            <h3 className="mb-5 text-xl font-semibold sm:text-2xl">
                                Welcome back
                            </h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="text-sm font-bold">Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border font-sans"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-bold">
                                Password
                            </label>
                            <input
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border font-sans" />
                        </div>


                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full border-black border-2 border-solid px-3 py-2.5 mb-10 mr-3 ${isSigningIn
                                ? "bg-gray-300 cursor-not-allowed"
                                : "hover:bg-black hover:text-white"
                                }`}
                        >
                            {isSigningIn ? "Signing In..." : "Sign In"}
                        </button>
                    </form>
                    <p className="mt-10 text-center text-sm">
                        Don't have an account?{" "}
                        <Link to={"/register"} className="hover:underline font-bold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Login;
