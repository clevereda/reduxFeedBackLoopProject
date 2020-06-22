import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {

  //initiate state to save inputs on change
  state = {
    commentsInput: {
      comments: ''
    }
  }

//function to handle set state for inputs on change
  handleCommentsChange = (event) => {

     //setting state to the input on change
    this.setState({
      commentsInput: {
        comments: event.target.value
      }
    })
  } //End of handleCommentsChange

//function for submitting value stored in local state to global state
  handleSubmit = (event) => {
     //pull dispatch from props
    const { dispatch } = this.props;
    //dispatch input to global state
    dispatch({ type: 'COMMENTS', payload: this.state.commentsInput });

//re-initializing state to be ready for another take of the survey
    this.setState({
      commentsInput: {
        comments: ''
      }
    })
  } //End handleSubmit


  render() {
    return (
      <>
        <h2 className="feeling">Any Comments You Want To Leave?</h2>

        <label>Comments</label>
        <br />

        <input value={this.state.commentsInput.comments} onChange={(event) => this.handleCommentsChange(event)}   type="text"  />
        <br />
         {/* Link button, with Link Route */ }
        <Link to='/Review' > <Button onClick={(event) => this.handleSubmit()}   className="next" variant="contained" color="primary" size='large'>Next</Button></Link>
      </>
    );
  }
}

export default connect () (Comments);
