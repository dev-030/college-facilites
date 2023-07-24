import { Link } from "react-router-dom";




export default function NotFound() {


    return(
        <>
            <div className="grid place-content-center h-screen">
            <img src="/404.png" className="w-[900px]" />

            <Link to={'/'} className="btn btn-outline text-center w-fit mx-auto">Home</Link>

            </div>
        </>
    )
}