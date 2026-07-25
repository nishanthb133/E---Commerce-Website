import { useNavigate } from "react-router-dom"
import "./cart.css"



function Fronthomedetails(){
    const navigate=useNavigate()
    return(
       <div className="fronthome">
        <h1>EXPLORE THE LATEST FASHION IN YOUR WORLD</h1>
        <h2>Your Destination For PREMIUM STYLES</h2 >
        <p>Welcome Novashopping, Your Ultimate<br/> Destination For  Jewellery,Gadgets and Clothes <br/>Explore The Latest In Tech And Style With Us. <br/>Shop Now And Discover A World Of Possibilities!</p>
        <button className="shop-btn" onClick={()=>navigate("/productpage")}>Shop Now</button>
       </div>
    )
}
export default Fronthomedetails