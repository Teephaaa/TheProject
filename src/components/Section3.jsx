import React from 'react';
import '../css/Section3.css';
import { ImArrowUpRight2 } from "react-icons/im";
import { DiAndroid } from "react-icons/di";
import { BiChevronRight } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";



const Section3 = () => {
  return (
    <div>
        
        <div className='section-three'>


        <div className='first-div'>
            <div className='first-live'>
                <h6>LIVE</h6>
                <ImArrowUpRight2 />
            </div>
            <div>
                <DiAndroid className='robot' />
                <h3 className='front-run'>Front-Run Protection </h3>
                <p>Trade with confidence, protected from exploitative bots.</p>
            </div>
            <div className='first-learn'>
                <h5>Learn more</h5>
                <BiChevronRight />
            </div>
        </div>


        <div className='second-div'>
            <div className='second-live'>
                <h6>LIVE</h6>
                <ImArrowUpRight2 />
            </div>
            <div>
                <VscSettingsGear  className='settings'/>
                <h3 className='true-auto'>True Auto Slippage</h3>
                <p>No more guessing, get the best price every time.</p>
            </div>
            <div className='second-learn'>
                <h5>Learn more</h5>
                <BiChevronRight />
            </div>
        </div>


        <div className='third-div'>
            <div className='third-live'>
                <h6>LIVE</h6>
                <ImArrowUpRight2 />
            </div>
            <div>
                <MdOutlineLocalGasStation className='station'/>
                <h3 className='eth-less'>ETH-Less Trading</h3>
                <p>Exchange your tokens without paying ETH upfront.</p>
            </div>
            <div className='third-learn'>
                <h5>Learn more</h5>
                <BiChevronRight />
            </div>
        </div>




        <div className='fourth-div'>
            <div className='fourth-live'>
                <h6>LIVE</h6>
                <ImArrowUpRight2 />
            </div>
            <div>
                <LuCircleDollarSign  className='dollar'/>
                <h3 className='failed'>No Failed Transaction Fees</h3>
                <p>Trade with peace of mind, and never pay for a failed transaction again.</p>
            </div>
            <div className='fourth-learn'>
                <h5>Learn more</h5>
                <BiChevronRight />
            </div>
        </div>











        </div>

        </div>
  )
}

export default Section3