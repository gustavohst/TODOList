import React from "react";
import './Tooltip.css'

function Tooltip(props){
   const {
      children,
   } = props

   return(
   <div className="tooltipContainer">
      <span className="tip">text</span> 
   </div>
   );
}

export default Tooltip;