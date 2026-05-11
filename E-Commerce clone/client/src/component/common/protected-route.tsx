import { Outlet ,Navigate} from "react-router";
import { useAuthMiddleware } from "@/store/auth.store/auth-store";
type ProtectedRouteProps={
    allowedRoles?:Array<"client" | "admin">
}
async function ProtectedRoute({allowedRoles}:ProtectedRouteProps){
    const {isAuthenticated,isLoading,checkAuth} = useAuthMiddleware() ;
    const user = await checkAuth() ;
    if(isLoading){
        return <div>Loading...</div>
    } 
    if(!isAuthenticated){
        return <Navigate to='/unauth'/>
    }
    if(isAuthenticated && user && !allowedRoles?.includes(user.role)){
        return <Navigate to='/unauth'/>
    }
    return (
        <>
            <Outlet/>
        </>
    )
}
export default ProtectedRoute;