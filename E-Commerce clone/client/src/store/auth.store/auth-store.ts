import {create} from 'zustand' ;
import axios from 'axios'

const API_URL = "http://localhost:3000";

type AuthRole = 'client' | 'admin';

export type AuthUser = {
    username : string ,
    email : string ,
    role : AuthRole ,
}

type StateRegister={
    username : string,
    email : string ,
    password : string ,
    setUsername : (user:string)=>void,
    setEmail : (mail:string) => void,
    setPassword : (pass:string) => void,
    onSubmit : () => Promise<void>,
    role : AuthRole,
}
export const useRegister = create<StateRegister>((set,get)=>({
    username : "",
    email : "",
    password : "",
    role : "client",
    setUsername : (current)=>{set(()=>({username : current}))},
    setEmail : (mail) => set(()=>({email:mail})),
    setPassword : (pass) => set(()=>({password:pass})),
    onSubmit : async ()=>{
        try{
            const res = await axios.post(`${API_URL}/register`,{
                username : get().username,
                password : get().password,
                email : get().email,
                role : get().role,
            },{withCredentials:true}) ;
            console.log(res) ;
            console.log(`Username : ${get().username} | Email : ${get().email} | Password : ${get().password}`)
            get().setUsername("");
            get().setEmail("");
            get().setPassword("")
        }
        catch(e){
            console.log(e) ;
        }
    },
    
})) ;

type StateLogin={
    email : string,
    password : string,
    setEmail : (email:string)=>void,
    setPassword : (password:string)=>void,
    onSubmit : ()=>Promise<AuthUser | null>,
}
// when i click on onSubmit , i should get redirected to either admin/dashboard or shop/home 
// admi/dashboar| product | order | features
// shop/home | listing | checkout | account | pay-pal | payment success | search 
export const useLoginUser = create<StateLogin>((set,get)=>({
    email : "",
    password : "",
    setEmail : (email) => {set(()=>({email:email}))},
    setPassword : (password) => {set(()=>({password : password}))},
    onSubmit : async()=>{
        try{
            await axios.post(`${API_URL}/login`,{
                email : get().email,
                password : get().password
            },{withCredentials:true});
            const user = await  useAuthMiddleware.getState().checkAuth();
            set({
                email : "",
                password : "",
            })
            return user;
        }
        catch(e){
            console.log(e);
            return null;
        }
        finally{
            console.log(`Email ${get().email} | Password ${get().password}`)
        }
    }
}))

type AuthState = {
    user : AuthUser | null,
    isAuthenticated : boolean,
    isLoading : boolean,
    checkAuth : ()=>Promise<AuthUser | null>,
}

export const useAuthMiddleware = create<AuthState>((set)=>({
    user : null,
    isAuthenticated : false,
    isLoading : true,
    checkAuth : async ()=>{
        try{
            const res = await axios.get(`${API_URL}/check-auth`,{withCredentials:true});
            set({
                user : res.data.user,
                isAuthenticated:true,
                isLoading:false,
            })
            return res.data.user ;
        }
        catch(e){
            set({
                user : null,
                isAuthenticated : false,
                isLoading : false,
            })
            console.log(e) ;
        }
    }
}))