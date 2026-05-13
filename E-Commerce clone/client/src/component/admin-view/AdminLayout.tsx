import { Outlet } from "react-router";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
function AdminLayout(){
    console.log(`AdminLayout reached...`) ;
    return (
        <>
            <div className={`w-full min-h-screen flex `}>
                <AdminSidebar/>
                <div className={`flex flex-col flex-1`}>
                    <AdminHeader/>
                    <Outlet/>
                </div>  
            </div>
        </>
    )
}
export default AdminLayout;