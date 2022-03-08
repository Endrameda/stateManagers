import React from 'react';

const Button = ({title, className, onClickHandler, disabled}) => {
    return (
        <button disabled={disabled} className={className} onClick={onClickHandler}>
            {title}
        </button>
    );
};

export default Button;
