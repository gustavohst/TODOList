import React, { useState } from "react";
import './Menu.css';

import Button from "../Button/Button";

function Menu() {

   const [showMenu, setShowMenu] = useState(false);

   const handleMenu = (event) => {
      event.preventDefault();

      setShowMenu(!showMenu);
   }

   return (
      <div>
         <Button label="User settings" onClick={(event) => handleMenu(event)} />

         {showMenu &&
            <div className="menuList">
               <Button layout="menuItem" label="Logout" icon="exit_to_app"/>
            </div>
         }
      </div>
   );
}

export default Menu;