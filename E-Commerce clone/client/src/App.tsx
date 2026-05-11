import { Routes ,Route } from "react-router";
import { useEffect } from "react";
import AuthLayout from "./component/auth/layout";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import { useAuthMiddleware } from "./store/auth.store/auth-store";
import ProtectedRoute from "./component/common/protected-route";
import Dashboard from "./pages/admin-view/dashboard";
import Home from "./pages/shopping-view/home";

function App(){
  const { checkAuth } = useAuthMiddleware();

  // useEffect(()=>{

  // },[checkAuth])
  
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route path="register" element = {<Register/>}></Route>
            <Route path='login' element={<Login/>}></Route>
          </Route>
          <Route path='/admin' element={<ProtectedRoute allowedRoles={['admin']}/>}>
            <Route path='dashboard' element={<Dashboard/>} ></Route>
          </Route>
          {/* <Route path='/admin/dashboard' element={<Dashboard/>}></Route> */}
          {/* <Route path='/shop' element={<ProtectedRoute allowedRoles={['client']}/>}>
            <Route path='/home' element={<Home/>}></Route>
          </Route> */}
        </Routes>
      </div>
    </>
  )
}
export default App;
