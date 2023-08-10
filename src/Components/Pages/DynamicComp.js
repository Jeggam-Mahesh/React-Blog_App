import  React from "react";
import { Link } from "react-router-dom";
import rythm from '../assets/rythm.svg'
import share from '../assets/share.svg'
import User from '../assets/User.png' 
import socialMediaIcon2 from '../assets/socialMediaIcon2.png'
import {Store} from "../DataStore";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
// import { useEffect } from "react";
const DynamicComp=()=>{
    React.useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
   const data=useContext(Store)
   console.log("storedata",data)
   const id_value=useLocation().state.index;
   console.log("hello"+id_value)
   const updatedData=data[0].filter((item)=>item.id===id_value)
   console.log(updatedData)
    return(
        <div>
         <header>
            <h1> <Link to ='/'>The<b>Siren</b></Link> </h1>
            <button id='get_start'>Get Started</button>
        </header>
        <div id='shareIcon'>
                <div className="clap1">
                <img src={rythm} alt="not found" width='50px' height='50px'/><span>9.3k</span>
                </div>
           <div className="clap1">
           <img src={share} alt="not found" width='50px' height='50px'/><span>share this article</span>   
           </div>
                  </div>
        
           
        <div className="dynamic_comp"> 
             <h1>{updatedData[0].heading}</h1>
        
        <div className="userIcon">
            <img src={User} alt="not found" width='100px' height='100px'/>
            <span><b>Mahesh</b><p>July 15 2023</p></span>
            <img src={socialMediaIcon2} alt="not found" width='265px' height='60px'/>
        </div>
        <div className="dynamic_img">
        <img  id='dynamic_img' src={updatedData[0].image} alt="not found" width='500px' height='350px'/>
        </div>
       
        <div className="dynamic_content">
            <h2>{updatedData[0].discription}</h2>
        </div>
        <div className="clap2">
        <img src={rythm} alt="not found" width='50px' height='50px'/><span>4.3k claps</span>
        </div>
        
        <div className="icon2">
            <img src={User} alt="not found" width='100px' height='100px'/>
            <div>
                <span>Written by:</span><br></br>
            <span><b>Mahesh</b></span><br></br>
            <span>July 15 2023</span>
            </div>
        </div>
        
        </div>
        
        <div className="backgrd">
        <h1 className='topic_heading hm  backgrd'>More From Siren</h1>
        <div className="more_from">
        
            {
                data[0].filter((item)=>{
                    if((updatedData[0].category!=='technology')&&(updatedData[0].category!=='fitness'))
                    return item.category===updatedData[0].category&&((item.id)%4===0)
                else
                return item.category===updatedData[0].category&&((item.id)%5===0)
                } )
                .map((item,index)=>{
                    return(
                        <div className='home_display_card' key={index}>
                        <div className="card_image">
                        <Link to='/dynamicPage' state={{index:item.id}}> <img src={item.image} className="image_box" alt='not found' /></Link>
                             {/* <img src={item.image} className="image_box" alt='not found'/> */}
                             </div> 
                  <div className="card_content ">
                 <h1>{item.heading}</h1>
                     {item.discription.slice(0,150)}</div>
                    
        <div className="icon2 more">
            <img src={User} alt="not found" width='100px' height='100px'/>
            <div>
               
            <span><b>Mahesh</b></span><br></br>
            <span>July 15 2023</span>
            </div>
        </div>
                     </div>
                    )
                })
            }
        
        </div>
        </div>
        
        </div>
    )
}
export default DynamicComp