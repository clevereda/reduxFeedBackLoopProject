import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Submission extends Component {
  render() {
    return (
      <>
        <h2 className="feeling">Thank You!</h2>

         <Link to='/Feeling' ><Button variant="contained" color="primary" size='large'>Leave New Feedback</Button></Link>
      </>
    );
  }
}

export default Submission;
