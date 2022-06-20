import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Interlock</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                        icon={<FontAwesomeIcon icon="fa-solid fa-bolt" />} 
                        sub={"Easy and Quick"} 
                        para={"Get your product delivered to your doorstep in under a week."}>   
                        </Highlight>
                        <Highlight 
                        icon={<FontAwesomeIcon icon="fa-solid fa-bars" />} 
                        sub={"10,000+ Customizable Options"} 
                        para={"Interlock has more customizable options than you can think of."}>
                        </Highlight>
                        <Highlight 
                        icon={<FontAwesomeIcon icon="fa-solid fa-tags" />} 
                        sub={"Affordable"} 
                        para={"Get your hands on popular crocheted goods for as little as $10."}>
                        </Highlight>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
