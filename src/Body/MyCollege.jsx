
import axios from "axios";
import { useQuery } from "react-query";
import { authContext, baseUrl } from "../authentication/AuthProvider";
import { useContext } from "react";



export default function MyCollege () {


    const {user,loading} = useContext(authContext);


    
    const {data,isLoading,refetch} = useQuery({
        queryKey : ['admittedColleges'] ,
        queryFn : async() => {
            const value = await axios.get(`${baseUrl}/user/${user.email}`)
            return value;
        },
        enabled : !loading
    })

    // console.log(data?.data?.admittedCollege)

    const reviewSubmit = (event)  => {
        event.preventDefault();
        console.log(event.target.textArea.value)
    }


    return (

        <>

        {
            data?.data?.admittedCollege?.map(data => 
            <div key={data._id}>
                <h1>Name : {data.collegeName}</h1>

                <form onSubmit={reviewSubmit}>
                <textarea id="textArea" className="border" rows="4" cols="50"></textarea>
                <br/>
                <input type="submit" value="Submit" className="border p-2"/>
                </form>

            </div>)
        }
        
        
        </>
    )
}