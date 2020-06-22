import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect} from 'react-redux';

class Understanding extends Component {

  state = {
    understandingInput: {
      understanding: ''
    }
  }

  handleUnderstandingChange = (event) => {
    this.setState({
      understandingInput: {
        understanding: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    const { dispatch } = this.props;
    dispatch({ type: 'UNDERSTANDING', payload: this.state.understandingInput });

    this.setState({
      understandingInput: {
        understanding: ''
      }
    })
  }


  render() {
    return (
      <>
        <h2 className="feeling">How Well Are You Understanding The Content?</h2>

        <label>Understanding?</label>
        <br />

        <input value={this.state.understandingInput.understanding} onChange={(event) => this.handleUnderstandingChange(event)} type="number" min="0" max="10" required />
        <br />
        <Link to='/Supported' ><Button onClick={(event) => this.handleSubmit()} className="next" variant="contained" color="primary" size='large'>Next</Button></Link>
      </>
    );
  }
}

export default connect () (Understanding);
