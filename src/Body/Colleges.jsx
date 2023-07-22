import axios from "axios";
import { useQuery } from "react-query";
import { baseUrl } from "../authentication/AuthProvider";


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

                       
                        <h1>{data.collegeName}</h1>
                        <p></p>

                        <button className="outline outline-1 p-2 rounded-md mt-2 hover:bg-black hover:text-white">Details</button>

                    </div>
                    
                </div>)
            }

        </div>





      
        </>
    )
}