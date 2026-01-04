import React from 'react';
import './Skeleton.css';

const Skeleton = ({ width, height, variant = 'rect', className = '', style = {} }) => {
    const styles = {
        width,
        height,
        ...style,
    };

    return (
        <span
            className={`skeleton ${variant} ${className}`}
            style={styles}
            role="status"
            aria-label="loading"
        ></span>
    );
};

export default Skeleton;
