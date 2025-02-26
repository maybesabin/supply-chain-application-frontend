import bgImage from "../assets/login image.png"
import LoginForm from "@/components/auth/login/LoginForm"
import googleIcon from "../assets/google.png"
import facebookIcon from "../assets/facebook.png"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="w-full px-12 py-4 h-screen flex items-center text-[#313957]">
            <div className="w-1/2 h-full flex items-center justify-end">
                <div className="w-[35rem] flex flex-col gap-6 justify-end">

                    {/* Login Form */}
                    <LoginForm />

                    {/* Separator */}
                    <div className="w-full flex items-center justify-center gap-2">
                        <div className="h-[1px] bg-blue-200 w-[40%]"></div>
                        <span className="text-base">Or</span>
                        <div className="h-[1px] bg-blue-200 w-[40%]"></div>
                    </div>

                    <div className="w-full rounded-lg border flex justify-center items-center gap-4 py-2.5 bg-neutral-50 hover:bg-neutral-100">
                        <img src={googleIcon} className="h-7 w-7" alt="" />
                        <span>Sign in with Google</span>
                    </div>

                    <div className="w-full rounded-lg border flex justify-center items-center gap-4 py-2.5 bg-neutral-50 hover:bg-neutral-100">
                        <img src={facebookIcon} className="h-7 w-7" alt="" />
                        <span>Sign in with Facebook</span>
                    </div>

                    <h3 className="text-base text-center">Don't have an account?&nbsp;
                        <Link to={'/signup'} className="underline text-blue-700 hover:text-blue-500">
                            Sign up
                        </Link>
                    </h3>
                </div>
            </div>

            <div className="w-1/2 h-full flex justify-end">
                <img
                    src={bgImage}
                    className="h-full w-full object-contain rounded-2xl" alt="" />
            </div>
        </div>
    )
}

export default Login