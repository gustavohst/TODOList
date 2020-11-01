import React from "react";
import './Button.css'
import Icon from "../Icon/Icon";

function Button(props) {
   const {
      label,
      layout,
      onClick,
      icon,
   } = props;

   return (
      <>
         <button 
            className={layout}
            onClick={onClick}
         >{label}
         {icon && <Icon text={icon}/>}
         </button>
      </>
   );
}

export default Button;