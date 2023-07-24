import axios from "axios";
import { useQuery } from "react-query";
import { baseUrl } from "../authentication/AuthProvider";
import { Link } from "react-router-dom";


export default function Colleges () {



    const {data,refetch,isLoading} = useQuery({
        queryKey : ['colleges'] ,
        queryFn : async() => {
        const value = await axios.get(`${baseUrl}/colleges`)
        return value;
        }
    })



    return(
        <>


        <div className="grid grid-cols-3 w-fit gap-7 mx-auto mt-20">

            {
                data?.data?.map(data => <div key={data.Id} className="w-64 border p-2 rounded">

                    <img src="/college.jpg" className="w-full h-48 mx-auto"/>

                    <div>

                       
                        <h1 className="pb-4 text-xl font-semibold">{data.collegeName}</h1>
                        

                        <Link to={'/college-details'} state={data} className="btn btn-outline btn-sm">Details</Link>


                    </div>
                    
                </div>)
            }

        </div>





      
        </>
    )
}