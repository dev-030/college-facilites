import { useContext } from "react"
import { authContext } from "../../authentication/AuthProvider"




export default function Profile () {


    const {user} = useContext(authContext);

    console.log(user)

    return(

        <div>
            <img src={user?.photoURL} alt="" srcset="" />
            <h1>Name : {user?.displayName}</h1>
            <h1>Email : {user?.email}</h1>

        </div>
    )
}