import { Routes ,Route } from "react-router";
import { useEffect } from "react";
import AuthLayout from "./component/auth/layout";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import { useAuthMiddleware } from "./store/auth.store/auth-store";
import ProtectedRoute from "./component/common/protected-route";
import Dashboard from "./pages/admin-view/dashboard";
import Home from "./pages/shopping-view/home";
import AdminLayout from "./component/admin-view/AdminLayout";
import Products from "./pages/admin-view/products";
import Orders from "./pages/admin-view/orders";
function App(){
  const { checkAuth } = useAuthMiddleware();

  useEffect(()=>{
    (async ()=>{
      await checkAuth() ;
    })()
  },[]) // this runs one , and rehydreates the user from the token read ... 
  
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route path="register" element = {<Register/>}></Route>
            <Route path='login' element={<Login/>}></Route>
          </Route>


          <Route path='/admin' element={<ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout></AdminLayout>
          </ProtectedRoute>}>
            <Route path='dashboard' element={<Dashboard/>}></Route>
            <Route path='products' element={<Products/>}></Route>
            <Route path = 'orders' element={<Orders/>}></Route>
          </Route>
          {/* <Route path='/shop' element={<ProtectedRoute allowedRoles={['client']}/>}>
            <Route path='home' element={<Home/>}></Route>
          </Route> */}
        </Routes>
      </div>
    </>
  )
}
export default App;
