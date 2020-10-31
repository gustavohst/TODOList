import React from "react";
import './TextField.css'

function TextField(props) {
   const {
      placeholder,
      onChange
   } = props;

   return (
      <>
         <input
            type="text"
            className="defaultInput"
            placeholder={placeholder}
            onChange={onChange}
         />
      </>
   );
}

export default TextField;