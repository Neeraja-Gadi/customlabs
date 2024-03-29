import React, { useState } from 'react';
import '../App.css';
import Header from "./Header";
import Traits from './Traits';
import BlueBox from './BlueBox';


const SegmentPopUp = (props) => {

    const [inputData, setInputData] = useState("");

    return (
    <>
            <div className='popup-overlay'>
               
                <div className='popup-content'>
                <Header textDisplay="Saving Segment" onClose={props.onClose} />
                    <div className='input-box-wrapper'>
                        <label htmlFor="name"><span className='label-name'>Enter the Name of the Segment</span></label><br />
                        <input type="text"
                            className="input-box"
                            id="name"
                            name="name of the segment"
                            placeholder='Name of the segment'
                            required
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                    </div>
                    <p>To save your segment, you need to add the schemas to build the query </p>

                    <Traits />

                    <BlueBox />
                    {/* <div>
        Add New Schema
    </div> */}

                    <br></br>
                    <button>Save Segment</button>
                    </div>
                </div>
            </>
            )
}

            export default SegmentPopUp