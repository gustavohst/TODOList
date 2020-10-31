import React from "react";
import Label from "../Label/Label";

function Checkbox(props){
   const { 
      name,
      value,
      label,
      checked = false,
      onChange,
    } = props

   return(
      <div>
         <input type="checkbox" name={name} value={value} checked={checked} onChange={onChange} />
         <Label text={label}/>
      </div>
   );
}

export default Checkbox;