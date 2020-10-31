import React from "react";
import './TextField.css'

function TextField(props) {
   const {
      placeholder,
   } = props;

   return (
      <>
         <input
            type="text"
            className="defaultInput"
            placeholder={placeholder}
            
         />
      </>
   );
}

export default TextField;