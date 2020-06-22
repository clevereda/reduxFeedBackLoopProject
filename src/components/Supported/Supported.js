import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Supported extends Component {
//initiate state to save inputs on change
  state = {
    supportedInput: {
      supported: ''
    }
  }

//function to handle set state for inputs on change
  handleSupportedChange = (event) => {
    //validate inputs
    const input = Number(event.target.value);
    if (input < 0 || input > 5) {
      alert('Please enter a number between 0 and 5');
      return
    }
    //setting state to the input on change
    this.setState({
      supportedInput: {
        supported: event.target.value
      }
    })
  } //End of handleSupportedChange

  //function for submitting value stored in local state to global state
  handleSubmit = (event) => {
     //pull dispatch from props
    const { dispatch } = this.props;
    //dispatch input to global state
    dispatch({ type: 'SUPPORTED', payload: this.state.supportedInput });

     //re-initializing state to be ready for another take of the survey
    this.setState({
      supportedInput: {
        supported: ''
      }
    })
  } //End handleSubmit


  render() {
    return (
      <>
        <h2 className="feeling">How Well Are You Being Supported?</h2>

        <label>Support? (0-5)</label>
        <br />

        <input value={this.state.supportedInput.supported} onChange={(event) => this.handleSupportedChange(event)} type="number" name="supported" min="0" max="5" required="required" />
        <br />
        {/* Link button, with Link Route */ }
        <Link to='/Comments' ><Button onClick={(event) => this.handleSubmit()} className="next" variant="contained" color="primary" size='large'>Next</Button></Link>
      </>
    );
  }
}

export default connect () (Supported);
