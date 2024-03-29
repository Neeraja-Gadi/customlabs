import React, { useState } from 'react';
import '../App.css'
import Header from "./Header";
import SegmentPopUp from './SegmentPopUp';

const HomePage = () => {
  const [isPopup, setIsPopUP] = useState(false);

  const OnClickShowSegment = () => {

    setIsPopUP(true)

  }

  const OnClickCloseSegment = () => {
    setIsPopUP(false)
  }

  return (
    <div className="homepage ">

      <Header textDisplay="View Segment" />
      <div className='homepage-main-content'>
        <h3 className='header-text' style={{ marginBottom: "0px", maxWidth: "60rem", fontWeight: 'bold', fontSize: "30px" }}>Make First-Party Data Your Secret Weapon To Drive Higher ROAS With CustomerLabs.</h3>
        <p className='semi-header-text' style={{ color: "#292e2e", maxWidth: "50rem", fontWeight: "normal", fontSize: "22px", }}>Our No-code Customer Data Platform makes it easy for marketers to collect first-party data across Website, CRM & other marketing tools.</p>

        <button className='segment-button' onClick={OnClickShowSegment}>Show segment</button>
        {isPopup && <SegmentPopUp onClose={OnClickCloseSegment} />}
      </div>

    </div>
  )

}

export default HomePage;