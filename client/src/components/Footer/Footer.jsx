import React from 'react';
import './footer.scss'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';


function footer(props) {
    return (
        <div className="footer__btn">
            <Link className="footer__btn-link" to='/'>
                <Button variant="contained"
                    color="primary"
                    className="footer__btn--size">
                    Finish!
                </Button>
            </Link>

            <Link className="footer__btn-link" to="/">
                <Button variant="contained"
                    color="primary"
                    className="footer__btn--size">
                    Add
                </Button>
            </Link>
        </div>
    );
}

export default footer;