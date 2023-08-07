import {  NavLink } from "react-router-dom"
import './images.png'
const NavBar=()=>{
    let cnt=1;
function menubox(){
   
    let menu= document.getElementById('menu_list');
    if((cnt%2)!==0){
       menu.style.display='block';
       cnt++;
       
    }
    else{
    menu.style.display='none'
    cnt++;
    }

}
    return(
        <div className="linkprnt">
        
           <div id='tittle'>
           <span id='the'>The</span>
            <span id='siren'>Siren</span>
            <button id='menu_button' onClick={menubox} >
            </button>
            <span id='menu_list'>
            <ul>
                <li> <NavLink to='/'>Home</NavLink></li> 
                <li><NavLink to='/bollywood'>Bollywood</NavLink></li>
                <li><NavLink to='/technology'>Technology</NavLink></li>
                <li><NavLink to='/hollywood'>Hollywood</NavLink></li>
                <li> <NavLink to='/fitness'>Fitness</NavLink></li>
                <li><NavLink to='/food'>Food</NavLink></li>
            </ul>
            </span>
        
           </div>
        
         <div id='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/bollywood'>Bollywood</NavLink>
            <NavLink to='/technology'>Technology</NavLink>
            <NavLink to='/hollywood'>Hollywood</NavLink>
            <NavLink to='/fitness'>Fitness</NavLink>
            <NavLink to='/food'>Food</NavLink>

        </div>
        </div>
       
    )
}
export default NavBar