import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Col, Row, Container } from "../Grid";
import "./style.css"

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Container fluid>
        <div id="logout">
          <p>{user.name.split(" ")[0]}, are you sure you want to log out?</p>
          <br />
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
            }}
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Logout
          </button>
        </div>
      </Container>
      // <div style={{ height: "75vh" }} className="container valign-wrapper">
      //   <div className="row">
      //     <div className="landing-copy col s12 center-align">
      //       <h4>
      //         <b>Hey there,</b>
      //         <p className="flow-text grey-text text-darken-1">
      //           Are you sure you want to log out?
      //         </p>
      //       </h4>

      //     </div>
      //   </div>
      // </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
