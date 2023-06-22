import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
const Header = props => {
    return (
        <Fragment>
        <div className={classes.header}>
            <h2>Tshirt</h2>
            <HeaderCart onClick={props.onOpen}/>
        </div>
      

        </Fragment>
    )
}

export default Header;