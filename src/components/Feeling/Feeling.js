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
        // const input = Number(event.target.value);

        // if (!Number(input) || input<0 || input>5 ){
        //   alert('Please enter a number between 0 and 5');
        //   return
        // }
        
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
            <label>Feeling? (0-5)</label>
            <br />
            <input value={this.state.feelingInput.feeling} onChange={(event) => this.handleFeelingChange(event)} type="number" name="feeling" min="0" max="5" required="required" />
            <br />
            <Link to="/Understanding"><Button onClick={(event) => this.handleSubmit()} className="next" variant="contained" color="primary" size="large">Next</Button></Link> 
            
          </>
        );
    }
}

export default connect () (Feeling);