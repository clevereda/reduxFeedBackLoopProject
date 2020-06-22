import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect} from 'react-redux';

class Review extends Component {

      storeFeedback = (event) => {
        axios.post('/api/feedback', this.props.feedback)
          .then(() =>{
            //clear global state
            this.dispatch({ type: 'RESTART', payload: [ ]});

          }).catch((error) => {
              console.log('There was an error', error);
          });

      }




  render() {
    return (
      <>
        <h2 className="feeling">Review Your Feedback</h2>

        <h5>Feelings: {this.props.feedback.map(reply => (reply.feeling)? reply.feeling: '')}</h5>
        <h5>Understanding: {this.props.feedback.map(reply => (reply.understanding)? reply.understanding: '')}</h5>
        <h5>Support: {this.props.feedback.map(reply => (reply.supported)? reply.supported: '')}</h5>
        <h5>Comments: {this.props.feedback.map(reply => (reply.comments)? reply.comments: '')}</h5>
        
        <Link to='/Submission' ><Button onClick={(event) => this.storeFeedback()} className="next" variant="contained" color="primary" size='large'>Submit</Button></Link>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feedback: state.feedbackReducer
  }
}

export default connect(mapStateToProps) (Review);
