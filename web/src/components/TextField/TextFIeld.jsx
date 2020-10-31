import React from "react";
import './TextField.css'

function TextField(props) {
   const {
      placeholder,
      onChange,
      type = 'text',
   } = props;

   return (
      <>
         <input
            type={type}
            className="defaultInput"
            placeholder={placeholder}
            onChange={onChange}
         />
      </>
   );
}

export default TextField;