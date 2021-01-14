import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({ className, children, outline, onClick}) {
    return (
        <button onClick={onClick} 
            className={classNames('button', className, {
            'button--outline': outline
            })}>
            {children}
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
  };
