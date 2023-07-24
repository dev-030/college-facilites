import axios from "axios";
import { useQuery } from "react-query";
import { baseUrl } from "../../../authentication/AuthProvider";
import { Link } from "react-router-dom";





export default function Featured() {

    const {data,refetch,isLoading} = useQuery({
        queryKey : ['colleges'] ,
        queryFn : async() => {
        const value = await axios.get(`${baseUrl}/colleges`)
        return value;
        }
    })


    console.log(data?.data)


    return(
    <>



{/* classData?.data.slice(0, 6) */}



        
        <div className="grid grid-cols-1 lg:grid-cols-3 container gap-6 w-3/4 mx-auto mt-20">


            {
                data?.data?.slice(0, 3).map(data => <div key={data._id} className="flex flex-col">


                <img src="/college.jpg"/>
                <div>
                    <h1 className="text-lg font-semibold">{data.collegeName}</h1>
                    <p><span className="font-semibold">Admission :</span> {data.admissionDates.start} to {data.admissionDates.end}</p>
                    <div className="flex"> <p className="font-semibold">Events :</p>  <span> {data?.events.map(data => <span className="pl-1 grid">{data.name}</span> )} </span> </div>
                    <p> <span className="font-semibold">Research History :</span> {data.researchHistory}</p>
                    <div className="flex"><p className="font-semibold">Sports:</p> <span className="pl-1 flex flex-wrap gap-4"> {data?.sports.map(data => <span >{data.name}</span> )} </span></div>
                </div>
                <Link to={'/college-details'} state={data} className="border border-black my-5 p-2 cursor-pointer rounded-lg text-center">Details</Link>

           

                </div>)
            }
            
           
            
        </div>


    </>
    )
}