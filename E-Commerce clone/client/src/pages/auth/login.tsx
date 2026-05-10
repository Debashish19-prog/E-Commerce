import LoginLayout from "@/component/auth/login.layout";
import { Link } from "react-router";
function Login(){
    return (
        <>
            <div className={` flex flex-col items-center`}>
                <div className="text-3xl">
                    Sign in to your Account
                </div>
                
                <div className={`mt-2`}>
                    <p>Dont have an account ? <span className="cursor-pointer"> <Link to='/register'>Register</Link> </span></p>
                </div>
                
                {/* form element */}
                <div className="w-full mt-2">
                   <LoginLayout/>

                </div>
            </div>
        </>
    )
}
export default Login;