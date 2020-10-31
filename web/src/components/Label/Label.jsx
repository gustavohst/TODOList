import React from "react";
import './Label.css'

function Label(props) {
   const {
      text,
      type = "defaultText",
   } = props;

   return (
      <>
         <span className={type}>{text}</span>
      </>
   );
}

export default Label;