import React from 'react'
// import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text , type, className, onClick, isDisabled }) => {
    // let defaultStyle = "bg-green-300 text-gray-100 text-xl font-medium focus:border-none mx-auto my-2 px-3 py-3";
    const enabledStyle = "focus:outline-none bg-prefered-shade2 hover:bg-prefered-shade3 focus:ring-2 focus:ring-opacity-50";
    let defaultStyle = `my-4 py-2 ${isDisabled ? 'bg-prefered-dark' : enabledStyle} shadow-md rounded-md text-gray-50 w-3/6 md:w-1/6 m-auto`;
    return (
        <button
        disabled={isDisabled}
        type={type}
        className={defaultStyle + className}
        onClick={onClick}
        >
            {text}
        </button>
    )
}

// Button.propTypes = {

// }

export default Button
