import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Supported extends Component {
  render() {
    return (
      <>
        <h2 className="feeling">How Well Are You Being Supported?</h2>

        <label>Support?</label>
        <br />

        <input type="number" min="0" max="10" required />
        <br />
        <Button className="next" variant="contained" color="primary" size="large" >Next</Button>
      </>
    );
  }
}

export default Supported;
