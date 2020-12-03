import React, { useEffect } from "react";
import User from "../../../models/User";
import { Col, Row, Container } from "../components/Grid";
import "../utils/API"
import API from "../utils/API";



const NoMatch = () => {

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getSavedBooks()
            setSavedBooks(books)
        }
        fetchBooks();
    }, [])


  return (
    <Container fluid>
        <form type="input" onSubmit={API.APIsaveUser(this.body)}></form>
        <button onClick={API.getAllUsers}>Get Users</button>
        <div className="container">
            <div id="tableWrapper" className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr id="tableHeader" className="bg-warning">
                    <th scope="col">Profile Photo</th>
                    <th scope="col">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.results.map((result, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {result.userName}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
    </Container>
  );
};

export default NoMatch;
