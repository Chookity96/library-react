import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                        icon={<FontAwesomeIcon icon="bolt" />} 
                        sub={"Easy and Quick"} 
                        para={"Get access to the book you purchased online instantly."}>   
                        </Highlight>
                        <Highlight 
                        icon={<FontAwesomeIcon icon="book-open" />} 
                        sub={"10,000+ Books"} 
                        para={"Library has books in all your favourite categories."}>
                        </Highlight>
                        <Highlight 
                        icon={<FontAwesomeIcon icon="tags" />} 
                        sub={"Affordable"} 
                        para={"Get your hands on popular books for as little as $10."}>
                        </Highlight>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;