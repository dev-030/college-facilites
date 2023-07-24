import { useContext } from "react";
import { authContext, baseUrl } from "../../../authentication/AuthProvider";
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



export default function Login () {




    const {userLogin,googleLogin} = useContext(authContext)

    const navigate = useNavigate();


    const login = (event) =>{
        event.preventDefault(); 

        userLogin(event.target.email.value,event.target.password.value).then(()=>{

            navigate('/');
               
        }).catch((error)=>{
            console.log(error)
        })
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
        

           

           

            <div className="flex flex-col items-center justify-center mt-20">

               
                <h1 className="text-5xl font-bold mb-6">Sign In</h1>

                



<form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={login}>
    <div className="card-body">
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" id="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="text" id="password" placeholder="password" className="input input-bordered" required/>
            <div className="flex gap-3">
            <label className=" mt-3 cursor-pointer" onClick={()=> loginWithGoogle()}><FcGoogle size={35}/></label>
            {/* <label className=" mt-3 cursor-pointer" onClick={()=>{github()}}><IoLogoGithub size={35}/></label> */}
            </div>



           
        </div>
        <label className="label">
                <Link to="/register" className="label-text-alt link">Dont have an account ?</Link>
            </label>
        <div className="form-control mt-6">
            <button className="btn btn-primary btn-ghost text-white bg-[black] hover:bg-slate-800 border-none">Login</button>
        </div>
    </div>
</form>
</div>


        
        </>
    )
}