
import "./SideBar.css";
import iconImg from '../../assets/icon.svg';
import { useState } from "react";
const SideBar = () => {

const [isActive, setIsActive] = useState(false);

const activeHandler = () =>{
    if (isActive)
       setIsActive(false);
    else
      setIsActive(true);
    console.log(isActive);
}

 return (
    <>
     
     <div className={isActive ? "side-bar-container" : "side-bar-container-nx"}>
         <button className={isActive ? "boton" : "boton-nx"} onClick={activeHandler}>
            <img src={iconImg} alt='icono'/>
         </button>
         <div className={isActive ? "grid" : "none"}>
          {isActive && <button className='buttonChoice'>Logout</button>}
          {isActive && <button className='buttonChoice'>Discount code</button>}
         </div>
     </div>
    </>
 );

}

export default SideBar;