import React,{ useContext } from "react"
import { Store } from "../DataStore"
import NavBar from "../NavBar"
import { Link } from "react-router-dom"
const Food=()=>{
    const  [data]=useContext(Store)
    return(
        <div>
            <NavBar/>
           <div className="card_parent">
            <div className="card_container1">
            <h1 className="topic_heading">Food</h1>
            {data.filter((item)=>item.category==='food').map((item,index)=>{
                return (
                
                  
                     <div className="display_card" key={index}>
                     <div className="card_image">  <Link to='/dynamicPage' state={{index:item.id}}> <img src={item.image} className="image_box" alt='not found' /></Link></div> 
                     <div className="card_content">
                    <h1>{item.heading}</h1>
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
                            return item.category==='food'&&(item.id)%2===0
                        }).map((item,index)=>{
                            return(
                                <div className=" post_disp_crd" key={index}>
                     <div className="post_image_div"> 
                     <Link to='/dynamicPage' state={{index:item.id}}><img className='post_image' src={item.image}  alt='not found'/></Link></div> 
                     <div className="post_content">
                    <h3>{item.heading}</h3>
                        {item.discription.slice(0,140)}</div>
                     </div>
                            )
                            
                        })
                    }
                     <div className="advertisement">
            <h2>Advertisement</h2>
            </div>
                   </div>
           
           </div> 
        </div>
    )
}
export default Food