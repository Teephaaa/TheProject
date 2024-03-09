import React from "react";
import { CiTwitter } from "react-icons/ci";
import { AiFillFund } from "react-icons/ai";
import { GiAbstract024 } from "react-icons/gi";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="first">
          <div className="Toad-one">
            <h1>ToadSwap</h1>
            <p>Home</p>
            <p>Utilities</p>
            <p>Roadmap</p>
            <p>DAO</p>
            <p>Audit</p>
            <p>Whitepaper</p>
          </div>

          <div className="Toad-two">
            <p>Buy$TOAD</p>
            <CiTwitter />
            <AiFillFund />
            <GiAbstract024 />
            <button className="launch-btn">Launch App</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
