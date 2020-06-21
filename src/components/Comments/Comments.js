import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

class Comments extends Component {
  render() {
    return (
      <>
        <h2 className="feeling">Any Comments You Want To Leave?</h2>

        <label>Comments</label>
        <br />

        <input type="text" required />
        <br />
        <Link to='/Review' ><Button className="next" variant="contained" color="primary" size='large'>Next</Button></Link>
      </>
    );
  }
}

export default Comments;
