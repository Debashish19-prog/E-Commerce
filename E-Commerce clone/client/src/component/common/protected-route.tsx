import { useAuthMiddleware } from "@/store/auth.store/auth-store";
import { Outlet,Navigate } from "react-router";

type UserRole = "admin" | "client";

function ProtectedRoute({allowedRoutes}:{allowedRoutes?:UserRole[]}){
    const {user,isAuthenticated,isLoading} = useAuthMiddleware() ;
    
    if(isLoading){
        return <div>Loading....</div>
    }

    if(!isAuthenticated || !user){
        return <Navigate to='/login'></Navigate>
    }
    if(allowedRoutes && !allowedRoutes.includes(user.role)){
        return <Navigate to='/unauthorized'></Navigate>
    }
    return <Outlet/>
}
export default ProtectedRoute;
