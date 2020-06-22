import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Feeling extends Component {

      state = {
        feelingInput: {
          feeling: ''
        }
      }
          
      handleFeelingChange = (event) => {
        this.setState({
          feelingInput: {
            feeling: event.target.value
          }
        })
      }

      handleSubmit = (event) => {
        const { dispatch }  = this.props;
        dispatch({ type: 'FEELING', payload: this.state.feelingInput});

        this.setState({
          feelingInput: {
            feeling: ''
          }
        })
      }

    render () {
        return (
          <>
            
            <h2 className="feeling">How Are You Feeling Today</h2>
            <label>Feeling?</label>
            <br />
            <input value={this.state.feelingInput.feeling} onChange={(event) => this.handleFeelingChange(event)} type="number" min="0" max="10" required />
            <br />
            <Link to="/Understanding"><Button onClick={(event) => this.handleSubmit()} className="next" variant="contained" color="primary" size="large">Next</Button></Link> 
            
          </>
        );
    }
}

export default connect () (Feeling);