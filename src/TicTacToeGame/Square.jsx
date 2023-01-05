import React from "react";
import "./Square.css";

const Square = (props) => {
    return (
        <div 
        onClick={props.onClick} 
            className="Square">
            {props.value}
        </div>
    );

};
export default Square;