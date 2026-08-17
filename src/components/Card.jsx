import React, { useState, useEffect } from 'react';
import linkData from '../data/links.json';

const Card = () => {
    // console.log("Current linkData:", linkData);
    return (
        <main>
            {linkData.map((section, index) => (
                <div key={index} className="iconset">
                    <h3>
                        {section.category}
                    </h3>
                    <div className="icons">
                        {section.links.map((link, linkIndex) => (
                            <a
                                key={linkIndex}
                                href={link.url}
                                rel="noopener noreferrer"
                            >
                                <img className='icon' title={link.title} src={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            <div id="empty">&nbsp;</div>
        </main>
    );
};

export default Card;

