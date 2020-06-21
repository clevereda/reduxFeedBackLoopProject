import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Review extends Component {
  render() {
    return (
      <>
        <h2 className="feeling">Review Your Feedback</h2>

                <h5>Feelings:</h5>
                <h5>Understanding:</h5>
              <h5>Support:</h5>
              <h5>Comments:</h5>
        
        <Button className="next" variant="contained" color="primary" size="large"> Submit </Button>
      </>
    );
  }
}

export default Review;
