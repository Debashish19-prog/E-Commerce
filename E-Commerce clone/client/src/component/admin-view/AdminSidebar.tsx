// sidebar has dashboard , products and orders
import { LayoutDashboard ,Handbag,ShoppingBag,ChartNoAxesCombined} from "lucide-react";
import { useNavigate } from "react-router";
const sideItems = [
    {
        id : 'dashboard',
        label : "Dashboard",
        url : "/admin/dashboard",
        icon : <LayoutDashboard/>
    },
    {
        id : 'products',
        label : "Products",
        url : "/admin/products",
        icon : <Handbag/>
    },
    {
        id : 'orders',
        label : 'Orders',
        url : '/admin/orders',
        icon : <ShoppingBag/>
    }
]
function AdminSidebar(){
    const navigate = useNavigate() ;
    return (
        <>
            <div className={` w-64 py-6 flex flex-col border-r`}>
                <div className="flex px-6 gap-2 items-center mb-8">
                    <ChartNoAxesCombined size={30}/>
                    <h1 className="text-xl font-extrabold">Admin Panel</h1>
                </div>
                
                {sideItems.map((e)=>{
                    return (
                        <div key={e.id} className="mt-5 py-3 px-6 flex gap-5  cursor-pointer text-xl text-muted-foreground hover:bg-muted hover:text-foreground" onClick={()=>navigate(`/${e.url}`)}>
                            {e.icon} 
                            {e.label}
                        </div>
                    )
                })} 
            </div>
        </>
    )
}
export default AdminSidebar;