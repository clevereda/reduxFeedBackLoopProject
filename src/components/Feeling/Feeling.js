import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';


class Feeling extends Component {

          

    render () {
        return (
          <>
            
            <h2 className="feeling">How Are You Feeling Today</h2>
            <label>Feeling?</label>
            <br />
            <input type="number" min="0" max="10" required />
            <br />
            <Link to="/Understanding"><Button className="next" variant="contained" color="primary" size="large">Next</Button></Link> 
            
          </>
        );
    }
}

export default Feeling;