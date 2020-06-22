import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {

  state = {
    commentsInput: {
      comments: ''
    }
  }


  handleCommentsChange = (event) => {
    this.setState({
      commentsInput: {
        comments: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    const { dispatch } = this.props;
    dispatch({ type: 'COMMENTS', payload: this.state.commentsInput });

    this.setState({
      commentsInput: {
        comments: ''
      }
    })
  }


  render() {
    return (
      <>
        <h2 className="feeling">Any Comments You Want To Leave?</h2>

        <label>Comments</label>
        <br />

        <input value={this.state.commentsInput.comments} onChange={(event) => this.handleCommentsChange(event)}   type="text" required />
        <br />
        <Link to='/Review' > <Button onClick={(event) => this.handleSubmit()}   className="next" variant="contained" color="primary" size='large'>Next</Button></Link>
      </>
    );
  }
}

export default connect () (Comments);
