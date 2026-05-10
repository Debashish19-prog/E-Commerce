import { Link } from "react-router";
import RegisterLayout from "@/component/auth/register.layout";
function Register(){
    return (
        <>
            <div className={` flex flex-col items-center`}>
                <div className="text-3xl">
                    Create a New Account
                </div>
                
                <div className={`mt-2`}>
                    <p>Already have an account ? <span className="cursor-pointer"> <Link to='/login'>Login</Link> </span></p>
                </div>
                
                {/* form element */}
                <div className="w-full mt-2">
                    <RegisterLayout/>

                </div>
            </div>
        </>
    )
}
export default Register ;