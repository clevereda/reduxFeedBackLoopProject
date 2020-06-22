import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect} from 'react-redux';

class Understanding extends Component {

//initiate state to save inputs on change
  state = {
    understandingInput: {
      understanding: ''
    }
  }

 //function to handle set state for inputs on change
  handleUnderstandingChange = (event) => {

     //validate inputs
    const input = Number(event.target.value);
     if (input < 0 || input > 5) {
       alert('Please enter a number between 0 and 5');
       return
     }
     //setting state to the input on change
    this.setState({
      understandingInput: {
        understanding: event.target.value
      }
    })
  } //End of handleUnderstandingChange

  //function for submitting value stored in local state to global state
  handleSubmit = (event) => {

    //pull dispatch from props
    const { dispatch } = this.props;
    //dispatch input to global state
    dispatch({ type: 'UNDERSTANDING', payload: this.state.understandingInput });

    //re-initializing state to be ready for another take of the survey
    this.setState({
      understandingInput: {
        understanding: ''
      }
    })
  }//End handleSubmit


  render() {
    return (
      <>
        <h2 className="feeling">How Well Are You Understanding The Content?</h2>

        <label>Understanding? (0-5)</label>
        <br />

        <input value={this.state.understandingInput.understanding} onChange={(event) => this.handleUnderstandingChange(event)} type="number" name="understanding" min="0" max="5" required="required" />
        <br />
        {/* Link button, with Link Route */ }
        <Link to='/Supported' ><Button onClick={(event) => this.handleSubmit()} className="next" variant="contained" color="primary" size='large'>Next</Button></Link>
      </>
    );
  }
}

export default connect () (Understanding);
