import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { searchFilter, searchFilterNormal } from "../../action/Actions";
export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (searchTerm === "") {
      alert("Please fill data");
      dispatch(searchFilterNormal());
    } else {
      dispatch(searchFilter(searchTerm));
    }
  };

  return (
    <nav
      style={{
        width: "100%",
        minHeight: "50px",
        backgroundImage:
          "radial-gradient( circle farthest-corner at 10% 20%,  rgba(38,51,97,1) 0%, rgba(65,143,222,1) 79% )",
      }}
    >
      <div className="navbardata">
        

        <ul className="text-center">
         
          <li>
            <Link to="/myteam">My Team</Link>
          </li>
         
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
