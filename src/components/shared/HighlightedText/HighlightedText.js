import React from 'react';

const HighlightedText = ({children, className}) => {
    return (
        <p className={`bg-red-700  text-sm px-4 inline-block rounded rounded-tl-none text-white uppercase ${className}`}>
              {children}
            </p>
    );
};

export default HighlightedText;