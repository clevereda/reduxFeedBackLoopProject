import React, {Component} from 'react';
import Button from "@material-ui/core/Button";


class Feeling extends Component {

    render () {
        return (
            <>
            <h2 className="feeling">How Are You Feeling Today</h2>

            <label >Feeling?</label><br/>

            <input type="number" min="0" max="10" required/>
            <br/>
            <Button className="next" variant="contained" color="primary" size='large'>Next</Button>
            </>
        );
    }
}

export default Feeling;