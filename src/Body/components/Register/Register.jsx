import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext, baseUrl } from "../../../authentication/AuthProvider";
import { updateProfile } from "firebase/auth";
import axios from "axios";




export default function Register () {


    const {userRegister} = useContext(authContext)

    const navigate = useNavigate();


    const register = (event) => {
        event.preventDefault();

        userRegister(event.target.email.value,event.target.password.value).then((userCredential)=>{
            
            updateProfile(userCredential.user , {
                displayName: event.target.name.value ,
                photoURL: event.target.photo.value
            })
            axios.post(`${baseUrl}/user` , {name:event.target.name.value , email:event.target.email.value , image:event.target.photo.value}).then(()=>{
                navigate('/')               
            })

        }).catch((error)=>{
            
          console.log(error)
        })
        

    }



    return (
         <>
         <div className="flex flex-col items-center justify-center mt-10">
                    <h1 className="text-5xl mb-5 font-bold">Sign Up</h1>

                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={register}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" id="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" id="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" id="password" className="input input-bordered" required/>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" id="photo" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link">Already have an account ?</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-ghost text-white bg-[black] hover:bg-slate-800  border-none">Register</button>
                            </div>
                        </div>
                    </form>
                    </div>
         </>
    )
}