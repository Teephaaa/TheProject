import React from 'react';
import '../css/Section4.css';
import { ImArrowUpRight2 } from "react-icons/im";
import { FaTriangleExclamation } from "react-icons/fa6";
import { BiChevronRight } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiCandles } from "react-icons/gi";
import { GiFrozenBlock } from "react-icons/gi";

const Section4 = () => {
  return (
    <div>
        <div className='section-four'>

        <div className='first-divv'>
            <div className='coming-one'>
                <h6>COMING SOON</h6>
                <ImArrowUpRight2 />
            </div>
            <div>
                <FaTriangleExclamation  className='exclamation'/>
                <h3 className='rug'>Rug Pull Protection</h3>
                <p className='trade-safely'>Trade safely, protected from scam projects.</p>
            </div>
            <div className='first-learnn'>
                <h5>Learn more</h5>
                <BiChevronRight />
            </div>
        </div>

        <div className='second-divv'>
            <div className='coming-two'>
                <h6>COMING SOON</h6>
                <ImArrowUpRight2 />
            </div>
            <div>
                <FaHandHoldingDollar className='dollarr'/>
                <h3 className='limit-order'>Limit Orders</h3>
                <p className='take-control'>Take control of your trades, and set your own price.</p>
            </div>
            <div>
                <h5 className='second-learnn'>Learn more</h5>
                <BiChevronRight />
            </div>
        </div>

        <div className='third-divv'>
            <div className='coming-three'>
                <h6>COMING SOON</h6>
                <ImArrowUpRight2 />
            </div>
            <div>
                <GiCandles className='candles'/>
                <h3 className='candle-swap'>Candle Swaps</h3>
                <p className='precise'>Precise timing and optimal price execution.</p>
            </div>
            <div className='third-learnn'>
                <h5>Learn more</h5>
                <BiChevronRight />
            </div>
        </div>

        <div className='fourth-divv'>
            <div className='coming-four'>
                <h6>COMING SOON</h6>
                <ImArrowUpRight2 />
            </div>
            <div>
                <GiFrozenBlock className='frozen'/>
                <h3 className='block'>Block Optimized Positioning</h3>
                <p className='precision'>Trade with precision within every block</p>
            </div>
            <div>
                <h5 className='fourth-learnn'>Learn more</h5>
                <BiChevronRight />
            </div>
        </div>
        </div>











    </div>
  )
}

export default Section4