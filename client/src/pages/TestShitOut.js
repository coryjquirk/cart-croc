import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import "../utils/API";
import API from "../utils/API";

function Testing() {
  const [userList, setUserList] = useState([]);
  const [newUsername, setUsername] = useState("");
  const [newPassword, setPassword] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      let users = await API.getAllUsers();
      console.log(users);
      console.log(userList);
      setUserList(users);
    };
    getUsers();
  }, []);

  // When the form is submitted, we validate there's an email and password entered
  function submitThisForm(event) {
    event.preventDefault();

    var userData = {
      userName: newUsername,
      password: newPassword,
    };
    API.saveUser(userData);
  }

  function handleNameChange(event) {
    const name = event.target.value;
    setUsername(name);
    console.log(newUsername);
  }

  function handlePassChange(event) {
    const pass = event.target.value;
    setPassword(pass);
  }

  return (
    <Container fluid>
      <form className="login" onSubmit={submitThisForm}>
        <div className="form-group">
          <input
            type="text"
            onChange={handleNameChange}
            className="form-control"
            id="username-input"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            onChange={handlePassChange}
            className="form-control"
            id="password-input"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-default  green darken-3">
          Login
        </button>
      </form>

      {/* <button onClick={API.getAllUsers}>Get Users</button> */}
      <div className="container">
        <div id="tableWrapper" className="row">
          <table className="table table-striped table-hover">
            <thead>
              <tr id="tableHeader" className="bg-warning">
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {userList?.map((result, index) => {
                return (
                  <tr key={index}>
                    <td>{result.password}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}

export default Testing;
