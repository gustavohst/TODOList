import React from "react";
import './Button.css'

function Button(props) {
   const {
      label,
      layout = "defaultButton",
      onClick,
   } = props;

   return (
      <>
         <button 
            className={layout}
            onClick={onClick}
         >{label}</button>
      </>
   );
}

export default Button;