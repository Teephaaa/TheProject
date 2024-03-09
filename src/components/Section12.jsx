import React from 'react';
import '../css/Section12.css';
import { BsChevronDown } from "react-icons/bs";

const Section12 = () => {
  return (
    <div className='section-twelve'>

        <div className='all-faq'>
            <div>
                <h1 className='faq'>FAQ</h1>
                <div className='all-quick'>
                <p>Quick answers to questions you may have.</p>
                <p>Can't find what you are looking for?</p>
                <p>Check out our full documentation.</p>
                </div> 
                <button className='documentation'>Documentation</button>
            </div>

            <div className='all-why'>

                <div className='why-one'>
                    <p>Why choose ToadSwap?</p>
                    <BsChevronDown />
                </div>
                <div className='why-two'>
                    <p>What are the fees on ToadSwap?</p>
                    <BsChevronDown />
                </div>
                <div className='why-three'>
                    <p>What's the long-term vision of ToadSwap?</p>
                    <BsChevronDown />
                </div>
                <div className='why-four'>
                    <p>How does ToadSwap ensure security?</p>
                    <BsChevronDown />
                </div>
                <div className='why-five'>
                    <p>How does ToadSwap calculate the output for trades & why is it different from others?</p>
                    <BsChevronDown />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Section12