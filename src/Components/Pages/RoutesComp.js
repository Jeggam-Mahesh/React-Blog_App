import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Home"
import Bollywood from "./Bollywood"
import Technology from "./Technology"
import Hollywood from "./Hollywood"
import Fitness from "./Fitness"
import Food from "./Food" 
// import NavBar from '../NavBar'
import DynamicComp from "./DynamicComp"
import Footer from "../Footer"
const RoutesComp=()=>{
    return(
        <div>
            <BrowserRouter>
           
            {/* <NavBar/> */}
            <Routes>
               
               <Route path='/' element={<Home/>}/>
                <Route path='/bollywood' element={<Bollywood/>}/>
                <Route path='/technology' element={<Technology/>}/>
                <Route path='/hollywood' element={<Hollywood/>}/>
                <Route path='/fitness' element={<Fitness/>}/>
                <Route path='/food' element={<Food/>}/>
               <Route path="/dynamicPage" element={<DynamicComp/>}/>
               {/* <Route path='/generic' element={<GenericComp/>}/> */}
                
            </Routes>
           <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default RoutesComp