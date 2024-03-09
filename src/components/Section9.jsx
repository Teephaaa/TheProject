import React from 'react';
import '../css/Section9.css';
import { ImArrowUpRight2 } from "react-icons/im";

const Section9 = () => {
    return (
    <div className='section-nine'>

<div className='one-community'>
        <div className='the-community'>
            <h5 className='para-one'>JOIN THE COMMUNITY</h5>
            <ImArrowUpRight2 />
        </div>
        <div><h2 className='forum'>Forum</h2></div>
        </div>

<div className='one-decision'>
        <div className='dao-decision'>
            <h5 className='para-two'>FOLLOW DAO DECISIONS</h5>
            <ImArrowUpRight2 />
        </div>
        <div><h2 className='latest'>Latest Proposals</h2></div>
        </div>



    </div>
    )
}

export default Section9