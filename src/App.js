import logo from "./logo.svg";
import "./App.css";
import EmployeeList from "./component/EmployeeList";
import {
  availableFilter,
  businessdevelopmentFilter,
  femaleFilter,
  financeFilter,
  itFilter,
  maleFilter,
  managementFilter,
  marketingFilter,
  salesFilter,
  uidesigningFilter,
  unavailableFilter,
} from "./action/Actions";
import { useDispatch } from "react-redux";

import Navbar from "./component/hedaer/Navbar";
import Myteam from "./component/Myteam";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar></Navbar>
      <div className="main">
        <div className="sidebar">
          <div class="flowers-wrap">
            <p>
              <strong>Filter By Domain:</strong>
            </p>
            <form>
              <label>
                <input
                  type="radio"
                  name="domain"
                  onClick={() => dispatch(salesFilter())}
                />{" "}
                Sales
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="domain"
                  onClick={() => dispatch(financeFilter())}
                />{" "}
                Finance
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="domain"
                  onClick={() => dispatch(managementFilter())}
                />{" "}
                Management
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="domain"
                  onClick={() => dispatch(itFilter())}
                />{" "}
                IT
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="domain"
                  onClick={() => dispatch(uidesigningFilter())}
                />{" "}
                UI Designing
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="domain"
                  onClick={() => dispatch(marketingFilter())}
                />{" "}
                Marketing
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="domain"
                  onClick={() => dispatch(businessdevelopmentFilter())}
                />{" "}
                Business Development
              </label>
            </form>
            <br />
            <br />
            <p>
              <strong>Filter By Gender:</strong>
            </p>
            <form>
              <label>
                <input
                  type="radio"
                  name="gender"
                  onClick={() => dispatch(maleFilter())}
                />{" "}
                MALE
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="gender"
                  onClick={() => dispatch(femaleFilter())}
                />{" "}
                FEMALE
              </label>
              <br />
            </form>{" "}
            <br />
            <br />
            <p>
              <strong>Filter Availability:</strong>
            </p>
            <form>
              <label>
                <input
                  type="radio"
                  name="status"
                  onClick={() => dispatch(availableFilter())}
                />{" "}
                Available User
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="status"
                  onClick={() => dispatch(unavailableFilter())}
                />{" "}
                Unavailable User
              </label>
              <br />
            </form>
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<EmployeeList />}></Route>
            <Route path="/home" element={<EmployeeList />}></Route>
            <Route path="/myteam" element={<Myteam />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
