import React from 'react';
import './footer.scss'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

function footer() {

    return (
        <div className="footer__btn">
            <Link className="footer__btn-link" to='/home'>
                <Button variant="contained"
                    color="primary"
                    className="footer__btn--size">
                    Finish!
                </Button>
            </Link>
        </div>
    );
}

export default footer;