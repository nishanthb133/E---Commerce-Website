import FrontHome from "./fronthome"
import Fronthomedetails from "./fronthomedetails"


function Home (){
    return(
        <div>
            <div className="hero-wrapper">
               <FrontHome/>
               <Fronthomedetails/>
            </div>
        </div>
    )
    

}
export default Home