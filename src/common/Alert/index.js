import React from 'react'

function Alert({ text, className }) {

    return (
        <span className={`absolute text-prefered-white p-4 rounded-xl top-1 z-20 text-sm ${className}`}>
            {text}
          </span>
    )
}

export default Alert
