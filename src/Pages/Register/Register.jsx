import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { createNewUser } from "../../firebase/auth";
import { Navigate, Link } from "react-router-dom";

const Register = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            await createNewUser(email, password);
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
                                Create a new account
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
                            <label className="text-sm font-bold">Password</label>
                            <input
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border font-sans"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-bold">Confirm Password</label>
                            <input
                                type="password"
                                autoComplete="off"
                                required
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }}
                                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border font-sans"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full border-black border-2 border-solid px-3 py-2.5 mb-10 mr-3 ${isRegistering
                                ? "bg-gray-300 cursor-not-allowed"
                                : "hover:bg-black hover:text-white"
                                }`}
                        >
                            {isRegistering ? "Signing Up..." : "Sign Up"}
                        </button>
                    </form>
                    <p className="mt-10 text-center text-sm">
                        Already have an account?{" "}
                        <Link to={"/login"} className="hover:underline font-bold">
                            Continue
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Register;
