import {LogOut } from 'lucide-react'
import { useLogout } from '@/store/auth.store/auth-store';
import { useNavigate } from 'react-router';
function AdminHeader(){
    const {onClick} = useLogout() ;
    const navigate = useNavigate() ;
    const handleClick= async ()=>{
        await onClick() ;
        navigate('/login') ;
    };  
    return (
        <>
            <div className={`w-full bg-background border-b px-2 py-2 flex items-center justify-end`}>
                {/* <div>
                    Home
                </div> */}
                <button className={`flex cursor-pointer bg-black text-white py-1 px-3 rounded-lg`} onClick={handleClick}>
                    <LogOut />
                    Logout
                </button>
            </div>
        </>
    )
}
export default AdminHeader;