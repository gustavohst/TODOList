import React from "react";
import './Icon.css';

function Icon(props){
   const {
      text = "edit",
      size = "small"
   } = props;

   return(
      <span className={`material-icons icon ${size}`}>{text}</span>
   )

}

export default Icon