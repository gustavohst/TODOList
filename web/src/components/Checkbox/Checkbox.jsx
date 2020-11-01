import React from "react";
import Label from "../Label/Label";

function Checkbox(props){
   const { 
      name,
      value,
      label,
      checked = false,
      onChange,
      disabled = false
    } = props

   return(
      <div className="checkListContainer">
         <input 
            type="checkbox" 
            name={name} 
            value={value} 
            checked={checked} 
            onChange={onChange}
            disabled={disabled}
         />
         <Label text={label}/>
      </div>
   );
}

export default Checkbox;