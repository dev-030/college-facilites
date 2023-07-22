import { useContext } from "react";
import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { authContext } from "../../../authentication/AuthProvider";




export default function Navbar () {


    const navigate = useNavigate()



    const {user,loading,userLogout} = useContext(authContext)


    const logOut = ()  => {
        userLogout().then(()=>{
            navigate('/')
        })
    }



    return(
        <>

        <div className="flex justify-between container mx-auto pt-6">
            <h1 className="text-xl font-bold">hello</h1>
            <ul className="flex gap-10 font-semibold items-center">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/colleges'}>Colleges</NavLink>
                {!loading && user &&
                    <NavLink to={'/admission'}>Admission</NavLink>
                }
                {!loading && user &&
                    <NavLink to={'/myCollege'}>My college</NavLink>
                }
                {!loading && !user && 
                <Link to={'/login'} className="bg-black text-white p-2 rounded">Login</Link>
                }
                {user&& 
                    <div>
                        <div className="flex items-center">
                            <h1>{user.displayName}</h1>
                            <img src={user?.photoURL} className="rounded-full w-10 h-10" />
                        </div>
                    <h1 className="cursor-pointer" onClick={logOut}>Logout</h1>
                    </div>
                }
            </ul>
        </div>



        <Outlet/>
        
        </>
    )
}