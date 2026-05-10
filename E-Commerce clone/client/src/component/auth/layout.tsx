import { Outlet } from "react-router";
function AuthLayout(){
    return (
        <>
            <div className={`min-h-screen bg-blue-500 flex flex-row`}>
                <div className={`bg-black text-white w-[50%] text-4xl flex justify-center items-center`}>
                    Welcome to E-Commerce Shopping
                </div>

                <div className={`bg-white w-[50%] flex justify-center items-center`}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
export default AuthLayout;
