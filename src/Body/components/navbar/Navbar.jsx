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


        



        <div className="flex justify-between container mx-auto pt-2 bg-transparent items-center">
            <h1 className="text-2xl font-bold">College <span>Finder</span></h1>
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
                            
                            <div className="relative">

                            <img src={user?.photoURL} className="rounded-full w-10 h-10 cursor-pointer" onClick={()=>{document.getElementById('userDropdown').classList.toggle('hidden')}} />
                            <div id="userDropdown" className="right-[10px] hidden absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div>{user?.displayName}</div>
                                    <div className="font-medium truncate">{user?.email}</div>
                                </div>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                    <li>
                                        <Link to={'/profile'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                    </li>
                                </ul>
                                <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={logOut}>Sign out</a>
                                </div>
                            </div>

                            </div>
                           
                        </div>
                    </div>
                }
            </ul>
        </div>





        <Outlet/>
        
        </>
    )
}