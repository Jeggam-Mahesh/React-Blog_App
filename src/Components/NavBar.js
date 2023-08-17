import {  NavLink } from "react-router-dom"
// import '../styles.css'
import './styles.css'
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
                <li className="link_nav"> <NavLink to='/'>Home</NavLink></li> 
                <li className="link_nav"><NavLink to='/bollywood'>Bollywood</NavLink></li>
                <li className="link_nav"><NavLink to='/technology'>Technology</NavLink></li>
                <li className="link_nav"><NavLink to='/hollywood'>Hollywood</NavLink></li>
                <li className="link_nav"> <NavLink to='/fitness'>Fitness</NavLink></li>
                <li className="link_nav"><NavLink to='/food'>Food</NavLink></li>
            </ul>
            </span>
        
           </div>
        
         <div id='navbar'>
            <NavLink to='/' className='nav_link'>Home</NavLink>
            <NavLink to='/bollywood' className='nav_link'>Bollywood</NavLink>
            <NavLink to='/technology' className='nav_link'>Technology</NavLink>
            <NavLink to='/hollywood' className='nav_link'>Hollywood</NavLink>
            <NavLink to='/fitness' className='nav_link'>Fitness</NavLink>
            <NavLink to='/food' className='nav_link'>Food</NavLink>

        </div>
        </div>
       
    )
}
export default NavBar