import React from 'react';
import '../css/Section13.css';
import { RiCopyrightLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { RiBook2Line } from "react-icons/ri";

const Section13 = () => {
  return (
    <div className='section-thirteen'>
        
        <div>
            <h1>ToadSwap</h1>
        </div>

        <div className='copyright'>
            <RiCopyrightLine />
            <p>ToadSwap</p>
            <p>2023.</p>
        </div>
        <div>
            <p>All rights reserved.</p>
        </div>
        <div>
            <p>info@toadswap.org</p>
        </div>

        <div>
            <FaTelegramPlane className='telegramm'/>
            <CiTwitter className='twitterr'/>
            <RiBook2Line className='bookline'/>
        </div>
    </div>
  )
}

export default Section13