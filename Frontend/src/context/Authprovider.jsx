import {React,createContext, useContext,useState} from 'react'


export const AuthContext=createContext()
export default function authprovider({children}){

    const initialauthuser=localStorage.getItem("Users")
    const [authuser, setauthuser] = useState(
        initialauthuser?JSON.parse(initialauthuser):undefined
        )
        
        return(
            <AuthContext.Provider value={[authuser,setauthuser]}>
        {children}
    </AuthContext.Provider>
)
}
export const useAuth=()=>useContext(AuthContext);