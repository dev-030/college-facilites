
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


    const reviewSubmit = (event,data)  => {
        event.preventDefault();
        const review = {review:event.target.textArea.value,collegeData:data}
        axios.post(`${baseUrl}/collegereview`,{body:review}).then(data => console.log(data))
    }


    return (

        <>

        {
            data?.data?.admittedCollege?.map(data => 
            <div key={data._id}>
                <h1>Name : {data.collegeName}</h1>
                <h1>Id : {data._id}</h1>

                <form onSubmit={(event)=>reviewSubmit(event,data)}>
                <textarea id="textArea" className="border" rows="4" cols="50"></textarea>
                <br/>
                <input type="submit" value="Submit" className="border p-2 cursor-pointer"/>
                </form>

            </div>)
        }
        
        
        </>
    )
}