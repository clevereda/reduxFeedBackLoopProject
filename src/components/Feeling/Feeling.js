import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Feeling extends Component {

  //initiate state to save inputs on change
      state = {
        feelingInput: {
          feeling: ''
        }
      }
          //function to handle set state for inputs on change
      handleFeelingChange = (event) => {
        const input = Number(event.target.value);
         
        //validate inputs
        if (input<0 || input >5 ){
          alert('Please enter a number between 0 and 5');
          return
        }
        
        //setting state
        this.setState({
          feelingInput: {
            feeling: event.target.value
          }
        })
      } //END of handleFeelingChange

//function for submitting value stored in local state to global state
      handleSubmit = (event) => {
        //pull dispatch from props
        const { dispatch }  = this.props;

        //dispatch input to global state
        dispatch({ type: 'FEELING', payload: this.state.feelingInput});

        //re-initializing state
        this.setState({
          feelingInput: {
            feeling: ''
          }
        })
      } //End of handleSubmit

    render () {
        return (
          <>
            
            <h2 className="feeling">How Are You Feeling Today</h2>
            <label>Feeling? (0-5)</label>
            <br />
            <input value={this.state.feelingInput.feeling} onChange={(event) => this.handleFeelingChange(event)} type="number" name="feeling" min="0" max="5" required="required" />
            <br />
            {/* Link button, with Link Route */}
            <Link to="/Understanding"><Button onClick={(event) => this.handleSubmit()} className="next" variant="contained" color="primary" size="large">Next</Button></Link> 
            
          </>
        );
    }
}

export default connect () (Feeling);