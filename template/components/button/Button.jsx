import React from 'react';

const Button = ({title, className, onClickHandler}) => {
    return (
        <button className={className} onClick={onClickHandler}>
            {title}
        </button>
    );
};

export default Button;
