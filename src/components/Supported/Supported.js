import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Supported extends Component {

  state = {
    supportedInput: {
      supported: ''
    }
  }


  handleSupportedChange = (event) => {
    this.setState({
      supportedInput: {
        supported: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    const { dispatch } = this.props;
    dispatch({ type: 'SUPPORTED', payload: this.state.supportedInput });

    this.setState({
      supportedInput: {
        supported: ''
      }
    })
  }


  render() {
    return (
      <>
        <h2 className="feeling">How Well Are You Being Supported?</h2>

        <label>Support?</label>
        <br />

        <input value={this.state.supportedInput.supported} onChange={(event) => this.handleSupportedChange(event)} type="number" min="0" max="10" required />
        <br />
        <Link to='/Comments' ><Button onClick={(event) => this.handleSubmit()} className="next" variant="contained" color="primary" size='large'>Next</Button></Link>
      </>
    );
  }
}

export default connect () (Supported);
