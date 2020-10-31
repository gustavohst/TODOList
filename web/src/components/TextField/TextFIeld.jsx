import React from "react";
import './TextField.css'

function TextField(props) {
   const {
      placeholder,
      onBlur,
      type = 'text',
   } = props;

   return (
      <>
         <input
            type={type}
            className="defaultInput"
            placeholder={placeholder}
            onBlur={onBlur}
         />
      </>
   );
}

export default TextField;