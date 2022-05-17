import React from 'react';

const Highlight = ({ icon, sub, para}) => {
    return (
        <div className="highlight">
            <div className="highlight__img">
                {icon}
            </div>
            <h3 className="highlight__subtitle">
                {sub}
            </h3>
            <p className="highlight__para">
                {para}
            </p>
    </div>
    );
}

export default Highlight;
