import { useRegister } from "@/store/auth.store/auth-store";
function RegisterLayout() {
    // we are initializing multiple states or either we can use useReducer or use zustand lib 
//   const [username, setusername] = useState<string>("");
//   const [email, setemail ] = useState<string>("") ;
    const {username,email,password,setUsername,setEmail,setPassword,onSubmit} = useRegister() ;
  return (
    <>
      <div className="flex flex-col gap-3">
        <form className="flex flex-col w-full gap-[2px]">
          <label className="text-[13px]">Username</label>
          <input
            value = {username}
            placeholder="Enter ur username"
            className="border-2 py-1 px-2 rounded-[10px] "
            onChange={(e)=>{setUsername(e.target.value)}}
          ></input>
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
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default RegisterLayout;
