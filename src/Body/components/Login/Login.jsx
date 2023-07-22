import { useContext } from "react";
import { authContext, baseUrl } from "../../../authentication/AuthProvider";
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function Login () {




    const {userLogin,googleLogin} = useContext(authContext)

    const navigate = useNavigate();

    console.log(baseUrl)



    const login = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
    }

    const loginWithGoogle = () => {
        googleLogin().then((data)=> {
            axios.post(`${baseUrl}/user` , {name:data?.user.displayName , email:data?.user.email , image:data?.user.photoURL}).then(()=>{
                navigate('/')               
            })
        })
    }


    return(
        <>
        

            <h1>Hello its the login page...</h1>

            <form onSubmit={login} className="flex flex-col gap-2 w-1/2 mt-32 mx-auto">
                <input type="email" id="email" className="border"/>
                <input type="text" id="password" className="border"/>
                <input type="submit" value="Login" className="border p-2"/>
            </form>

            <FcGoogle size={35} className="cursor-pointer" onClick={()=> loginWithGoogle()}/>

        
        </>
    )
}