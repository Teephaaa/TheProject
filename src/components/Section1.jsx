import React from 'react';
import '../css/Section2a.css';
import { IoIosWarning } from "react-icons/io";

const Section1 = () => {
  return (
    <div className='section-one'>

<div>
        <h2 className="otsea">Toad Token Migration</h2>
      </div>
      <div className="warning">
        <IoIosWarning className="warning-icon"/>
         <p className="warning-para">WARNING: if you have not migrate yet, do NOT buy, sell or transfer
        $OTSEA tokens. For a successful migration, you must use the original
        wallet from the snapchat date and transfer onlythe exact amount of
        tokens you had at a time.</p>
      </div>
      <div className="control">
        <h4 className="control-one">Control your weak to migrate you tokens</h4>
        <button className="connect-btn">Connect Wallet</button>
      </div>
    </div>
  )
}

export default Section1