import React,{ useContext } from "react"
import { Store } from "../DataStore"
import { Link } from "react-router-dom"
// import GenericComp from "./GenericComp"
import NavBar from "../NavBar"
// import DynamicComp from "./DynamicComp";
const Bollywood=()=>{ 
    const  [data]=useContext(Store)
    console.log("Bollywood",data);
    // const [id,heading,image,discription,category]=data;
    return(
        <div> 
             {/* <GenericComp  */}
             {/* id={id} heading={heading} image={image} discription={discription} category={category} /> */}

         <NavBar/>
          <div className="card_parent">
            <div className="card_container1"> 
                
            <h1 className="topic_heading">Bollywood</h1>
            {data.filter((item)=>item.category==='bollywood').map((item,index)=>{
                return (
                
                    <div className="display_card" key={index}>
                     <div className="card_image">
                        <Link to='/dynamicPage' state={{index:item.id}}> <img src={item.image} className="image_box" alt='not found' /></Link>
                    
                         </div> 
                     <div className="card_content">
                    <h1 >{item.heading}</h1>
                        {item.discription.slice(0,200)}</div>
                     </div>
                  
                    
                   
                )
            })                 
           
            } 
            </div>
            <div className="post_container">
                    <h1 className="topic_heading">Top Posts</h1>
                    {
                        data.filter((item)=>{
                            return item.category==='bollywood'&&(item.id)%2===0
                        }).map((item,index)=>{
                            return(
                                <div className=" post_disp_crd" key={index}>
                     <div className="post_image_div"> 
                     <Link to='/dynamicPage' state={{index:item.id}}><img className='post_image' src={item.image}  alt='not found'/></Link>
                     </div> 
                     <div className="post_content">
                    <h3>{item.heading}</h3>
                        {item.discription.slice(0,140)}</div>
                     </div>
                            )
                            
                        })
                    }
                     <div className="advertisement">
                     {/* width='400px' height='600px' */}
                        <img className='Adds' src='https://i.pinimg.com/originals/27/94/6a/27946a99657cddf0cbde79a7e4e6f51f.gif' alt="not found" />
                        </div>
          
                   </div>
           
           </div>
            
        </div>
    )
}
export default Bollywood