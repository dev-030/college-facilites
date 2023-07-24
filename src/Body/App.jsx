import Navbar from "./components/navbar/Navbar"
import Footer from './components/Footer/Footer'
import Featured from "./components/Featured/Featured"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Colleges from "./Colleges"
import "./app.css"

function App() {

  return (
    <>


      <div className="overflow-hidden header flex items-center justify-center">

        <input type="text" className="border border-black py-2 px-10 mt-[-100px] rounded" placeholder="Search college"/>

      </div>
      
      <Featured/>


      <h1 className="text-center font-bold text-2xl my-20 text-red-500">Website under contruction.</h1>
     
      
    </>
  )
}

export default App
