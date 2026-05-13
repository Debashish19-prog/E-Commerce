'use client'
import { Outlet ,Navigate} from "react-router";
import { useAuthMiddleware } from "@/store/auth.store/auth-store";
// type ProtectedRouteProps={
//     allowedRoles?:Array<"client" | "admin">
// }
function ProtectedRoute({allowedRoles,children}:{allowedRoles?:Array<"client" | "admin">,children:React.ReactNode}){
    const {isAuthenticated,isLoading,user} = useAuthMiddleware() ;
    // const user = await checkAuth() ;
    if(isLoading){
        return <div>Loading...</div>
    } 
    if(!isAuthenticated){
        return <Navigate to='/unauth'/>
    }
    if(isAuthenticated && user && !allowedRoles?.includes(user.role)){
        return <Navigate to='/unauth'/>
    }
    console.log(`Protected route -> Outlet`) ;
    return (
        <>{children}</>
    )
    
}
export default ProtectedRoute;
