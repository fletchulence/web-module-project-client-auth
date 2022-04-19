import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div>
         <Link to='/login'> Login </Link>
         <br/>
         <Link to='/logout'> Logout </Link>
         <br/>
         {/* i want the below to only render when there is a token available */}
         <Link to='/protected'> Friends List </Link>
      </div>
   )
}
