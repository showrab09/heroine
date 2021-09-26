import React from 'react';
import "./Heroinelist.css"

const Heroinelist = (props) => {
    console.log(props)
    return (
        <div className="Heroinelist">

            {
                <li> {props.heroine} </li>

            }
        </div>
    );
};

export default Heroinelist;