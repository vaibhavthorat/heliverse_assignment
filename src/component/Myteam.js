import React from "react";
import { useSelector } from "react-redux";

export default function Myteam() {
  let emp = useSelector((state) => state.employees.addedItems);
  let style1 = {
    backgroundColor: "#1369ce",
    color: "white",
    width: "200px",
    border: "0px",
  };
  let style2 = {
    backgroundColor: "red",
    color: "white",
    width: "200px",
    border: "0px",
  };
  return (
    <>
      {emp.map((user, i) => (
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={user.avatar} />
          </div>
          <div className="team-content">
            <h3 className="name">
              {user.first_name} {user.last_name}
            </h3>
            <h4 className="title">{user.domain}</h4>
            <h4 className="title">{user.email}</h4>
            <h4 className="title">{user.gender}</h4>
          </div>
          <ul className="social">
            <li>
              <button style={user.available === true ? style1 : style2}>
                Team Member
              </button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
