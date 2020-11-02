import React, { useState } from "react";
import './Menu.css';

import Button from "../Button/Button";

function Menu(props) {
   const { 
      email = "User settings",
    } = props;

   const [showMenu, setShowMenu] = useState(false);

   const handleMenu = (event) => {
      event.preventDefault();

      setShowMenu(!showMenu);
   }

   const redirectPage = () => {
      window.location.pathname = "/";
   }

   return (
      <div>
         <Button
            label={email}
            layout="defaultButton"
            onClick={(event) => handleMenu(event)} 
         />

         {showMenu &&
            <div className="menuList">
               <Button
                  layout="menuItem"
                  label="Logout"
                  icon="exit_to_app"
                  onClick={() => redirectPage()}
               />
            </div>
         }
      </div>
   );
}

export default Menu;