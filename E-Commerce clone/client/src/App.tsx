import { Routes ,Route } from "react-router";
import { useEffect } from "react";
import AuthLayout from "./component/auth/layout";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import ProtectedRoute from "./component/common/protected-route";
import { useAuthMiddleware } from "./store/auth.store/auth-store";
import AdminDashboard from "./pages/admin/dashboard";
import ShopHome from "./pages/shop/home";
import Unauthorized from "./pages/unauthorized";
function App(){
  const { checkAuth } = useAuthMiddleware();

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route path="register" element = {<Register/>}></Route>
            <Route path='login' element={<Login/>}></Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoutes={['admin']}/>}>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
          </Route>
          <Route element={<ProtectedRoute allowedRoutes={['client']}/>}>
            <Route path='/shop/home' element={<ShopHome/>}></Route>
          </Route>
          <Route path='/unauthorized' element={<Unauthorized/>}></Route>
        </Routes>
      </div>
    </>
  )
}
export default App;
