import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Understanding extends Component {
  render() {
    return (
      <>
        <h2 className="feeling">How Well Are You Understanding The Content?</h2>

        <label>Understanding?</label>
        <br />

        <input type="number" min="0" max="10" required />
        <br />
        <Button className="next" variant="contained" color="primary" size="large" >Next</Button>
      </>
    );
  }
}

export default Understanding;
