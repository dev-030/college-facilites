
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { authContext, baseUrl } from "../authentication/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Admission() {


    const {user,loading} = useContext(authContext)

    const [collegeInfo , setCollegeInfo] = useState(null);

    const {data:userAdmitted,isLoading:isLoadingAdmitted,refetch:admittedRefetch} = useQuery({
        queryKey : ['admittedColleges'] ,
        queryFn : async() => {
            const value = await axios.get(`${baseUrl}/user/${user.email}`)
            return value;
        },
        enabled : !loading
    })





    const {data,refetch,isLoading} = useQuery({
        queryKey : ['colleges'] ,
        queryFn : async() => {
        const value = await axios.get(`${baseUrl}/colleges`)
        return value;
        }
    })


    const openModal = (val) => {
        setCollegeInfo(val)
        document.getElementById('modal').classList.remove('hidden')
    }



    const admit = (event) => {

        event.preventDefault();


        const collegeData = collegeInfo;
        collegeData.submittedData = {
            studentName : event.target.name.value,
            subject : event.target.subject.value,
            email : event.target.email.value,
            phoneNumber : event.target.phoneNumber.value,
            address : event.target.address.value
        };

        axios.post(`${baseUrl}/admission` , {userEmail:user?.email,collegeData}).then(data => {
            if(data.data?.modifiedCount>0){
                document.getElementById('modal').classList.add('hidden')
                admittedRefetch();
            }else{
                console.log('heas')
            }
        })
    }


    // console.log(userAdmitted?.data?.admittedCollege)

    return(
        <>

       


        <div className="grid grid-cols-3 w-fit gap-7 mx-auto mt-20 mb-20">

            {!loading &&
                data?.data?.map(data => <div key={data.Id} className="w-64 border p-2 rounded">

                    <img src="/college.jpg" className="w-full h-48 mx-auto"/>

                    <div>

                       
                        <h1 className="text-xl font-semibold">{data.collegeName}</h1>
                        <p></p>
                        <Link to={'/college-details'} state={data} className="btn btn-outline btn-sm">Details</Link>
                        <button className="rounded-lg border p-1 cursor-pointer m-3 disabled:bg-gray-400 disabled:cursor-default" disabled={(userAdmitted?.data?.admittedCollege?.some(obj => obj.Id === data.Id))? true : false} onClick={()=>openModal(data)}>Admission</button>

                    </div>
                    
                </div>)
            }

        </div>



           
        <div className="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="modal">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">hjwh</div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <form className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" onSubmit={admit}>
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="font-semibold leading-6 text-gray-900 text-center text-xl pb-5" id="modal-title">Admission form</h3>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                
                                        <input required type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" id="name"/>
                                        <input required type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" id="subject"/>
                                        <input required type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" id="email"/>
                                        <input required type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs" id="phoneNumber"/>
                                        <input required type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" id="address"/>
                                        <input required type="text" placeholder="date of birth" className="input input-bordered w-full max-w-xs" id="dateOfBirth"/>
                                        <input required type="text" placeholder="image field" className="input input-bordered w-full max-w-xs" id="image"/>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="submit" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" >Submit</button>
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={()=>{
                                document.getElementById('modal').classList.add('hidden')
                            }}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

      
        </>
    )
}