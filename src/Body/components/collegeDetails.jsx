import { useLocation } from "react-router-dom";




export default function CollegeDetails ()  {

    const location = useLocation();
    const data = location.state;

    console.log(data)

    return(

        <>

        <div>


            <img src="/college.jpg" className="w-1/2 rounded-lg" />
            <div>
                <h1><span className="font-bold">College Name :</span> {data.collegeName}</h1>
                <p><span className="font-bold">Admission Process :</span> {data.admissionProcess}</p>
                <p><span className="font-bold">Events :</span> {data.events.map(data => <div>
                    {data.name} : 
                    {data.description}
                    {data.date}
                    {data.location}
                    </div>)}</p>
                <p><span className="font-bold">Research Works :</span> {data.researchHistory}</p>
                <p><span className="font-bold">Sports :</span> {data.sports.map(data => <div>
                    <span className="font-semibold">{data.name} : </span> 
                    {data.description}
                </div> )}</p>
            </div>
        </div>
        
        
        
        
        
        </>
    )
}