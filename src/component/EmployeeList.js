import React, { useState } from "react";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../action/Actions";


export default function EmployeeList() {
  // after all we have to collect the data to collect the data we have to use "useSelector" we use it here
  let emp = useSelector((state) => state.employees.items);
  const [test,setTest]=useState('');
  // const [start,setStart]=useState(0);
  // const [end,setEnd]=useState(20);

  // let data=test.slice(start,end);
  const dispatch = useDispatch();
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

  const handleUser = (id,status) => {
    if(status===true){
      dispatch(selectUser(id));
    }
    else{
      alert("User Not Available...");
    }
  };
// const handleNext=()=>{
//       setStart(start+20);
//       setEnd(end+20);
// }
// const handlePrevious=()=>{
//   setStart(start-20);
//   setEnd(end-20);
// }
  return (
    <>
    <div className="searchinput">    
    <input placeholder="Search..." style={{height:"30px",position:"absolute",top:"10px",right:"175px"}}onChange={(e)=>setTest(e.target.value)}/><br/><br/><br/><br/>
    </div>

      {emp.filter((p1) => p1.first_name.concat(p1.last_name).toLowerCase().includes(test.toLowerCase()) && p1.first_name.concat(p1.last_name)!==test.toLowerCase())
      .map((user, i) => (
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
              <button
                style={user.available === true ? style1 : style2}
                onClick={() => handleUser(user.id,user.available)}
              >
                {user.available === true ? "Select User" : "User Not Available"}
              </button>
            </li>
          </ul>
        </div>
      ))}
      {/* <button onClick={()=>handlePrevious()} style={{width:"49%",border:"0px",backgroundColor:"#333",color:"white",padding:"1px",marginBottom:"5px"}}>Previous</button>&nbsp;
      <button onClick={()=>handleNext()} style={{width:"49%",border:"0px",backgroundColor:"#333",color:"white",padding:"1px",marginBottom:"5px"}}>Next</button> */}
    </>
  );
}
