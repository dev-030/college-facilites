
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

        {/* {
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
        } */}



{
            data?.data?.admittedCollege?.map(data => 
            <div key={data._id} className="mb-12">
               
                <div>


                <img src="/college.jpg" className="w-1/2 rounded-lg" />
                <div>
                    <h1><span className="font-bold">College Name :</span> {data?.collegeName}</h1>
                    <p><span className="font-bold">Admission Process :</span> {data?.admissionProcess}</p>
                    <div><span className="font-bold">Events :</span> {data?.events.map(data => <div key={data.name}>
                        {data?.name} : 
                        {data?.description}
                        {data?.date}
                        {data?.location}
                        </div>)}</div>
                    <p><span className="font-bold">Research Works :</span> {data?.researchHistory}</p>
                    <div><span className="font-bold">Sports :</span> {data?.sports.map(data => <div key={data.name}>
                        <span className="font-semibold">{data?.name} : </span> 
                        {data?.description}
                    </div> )}</div>
                </div>
                </div>

                <h1 className="text-xl font-bold mt-3">Give review </h1>

                <form onSubmit={(event)=>reviewSubmit(event,data)}>
                <textarea required id="textArea" className="border" rows="4" cols="50"></textarea>
                <br/>
                <input type="submit" value="Submit" className="btn btn-outline btn-sm "/>
                </form>

            </div>)
        }


        
        
        </>
    )
}