import { useLoginUser } from "@/store/auth.store/auth-store";
import { useNavigate } from "react-router";
function LoginLayout() {
  const { email, password, setEmail, setPassword ,onSubmit} = useLoginUser();
  const navigate = useNavigate() ;
  async function handleClick(){
    const user = await onSubmit() ;
    // user is object of {email , username , role} 
    if(!user){
      console.log('No User found!!!' ) ;
      return ;
    }
    if(user?.role === 'admin'){
      // redirect to some route 
      console.log("User role is admin") ;
      console.log(user) ;
      navigate('/admin') ;
      return ;

    }
    if(user?.role === 'client'){
      // redirect to some other url 
      console.log("User role is client") ;
      console.log(user) ;
      navigate('/shop/home') ;
    }
    console.log(`default user : ${user}`) ;
    return ;

  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <form className="flex flex-col w-full gap-2">
          <label className="text-[13px]">Email</label>
          <input
            placeholder="Enter ur email"
            className="border-2 py-1 px-2 rounded-[10px]"
            value = {email} 
            onChange={(e)=>{setEmail(e.target.value)}}
          ></input>
          <label className="text-[13px]">Password</label>
          <input
            placeholder="Enter ur password"
            className="border-2 py-1 px-2 rounded-[10px]"
            value = {password}
            onChange={(e)=>{setPassword(e.target.value)}}
          ></input>
        </form>
        <button
          className={`bg-black text-white rounded-2xl cursor-pointer py-1 px-2`}
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default LoginLayout;
