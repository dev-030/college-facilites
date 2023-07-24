import { useContext } from "react"
import { authContext } from "../../authentication/AuthProvider"




export default function Profile () {


    const {user} = useContext(authContext);


    return(

        <div>
            <img src={user?.photoURL} className="w-44 h-44" />
            <h1>Name : {user?.displayName}</h1>
            <h1>Email : {user?.email}</h1>

        </div>
    )
}