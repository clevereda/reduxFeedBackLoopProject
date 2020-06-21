import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import Supported from '../Supported/Supported';
import Button from "@material-ui/core/Button";
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  state = {
    start: false,
  };

  componentDidMount (){
    this.setState({
      start: false
    });
  }

  startSurvery = () => {
    this.setState({
      start: true,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          {(this.state.start)? ' ':
         <div>
           <h2 className="Start">Are Your Ready To Begin? Click Start Below!</h2>
          <Link to='/Feeling'> <Button onClick={()=>this.startSurvery()} className="next" variant="contained" color="primary" size="large">Start</Button> </Link>
         </div>}
        
          <Route exact path="/Feeling" component={Feeling} />
          <Route exact path="/Understanding" component={Understanding} />
          <Route exact path="/Supported" component={Supported} />
          <Route exact path="/Comments" component={Comments} />
          <Route exact path="/Review" component={Review} />
          <Route exact path="/Submission" component={Submission} />
        </Router>
      </div>
    );
  }
}

export default App;
