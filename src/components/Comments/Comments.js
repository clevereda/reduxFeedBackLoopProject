import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Comments extends Component {
  render() {
    return (
      <>
        <h2 className="feeling">How Are You Feeling Today</h2>

        <label>Comments</label>
        <br />

        <input type="text" required />
        <br />
        <Button className="next" variant="contained" color="primary" size="large"> Next </Button>
      </>
    );
  }
}

export default Comments;
