import * as React from "react";
import './custom-arrow.css';


const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
    return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

export {
    CustomLeftArrow,
    CustomRightArrow,
};