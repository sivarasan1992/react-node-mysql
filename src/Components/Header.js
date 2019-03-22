import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function HeaderComponent(){
    return(
        <div className="listWrapper">
            <div className="listItems">
<Link to='/'>Search Records</Link>
            </div>
            <div className="listItems">
<Link to='/addRecords'>Add Records</Link>
            </div>
        </div>
    )
}
export default HeaderComponent