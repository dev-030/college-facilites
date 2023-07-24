import { useLocation } from "react-router-dom";




export default function CollegeDetails ()  {

    const location = useLocation();
    const data = location.state;

    // console.log(data)

    return(

        <>

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
        
        
        
        
        
        </>
    )
}