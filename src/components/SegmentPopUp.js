import React, { useState} from 'react';
import '../App.css';
import Header from "./Header";
import Traits from './Traits';
import BlueBox from './BlueBox';
import Footer from "./Footer"


const SegmentPopUp = (props) => {

    const [inputData, setInputData] = useState("");
    const [BlueBoxData, setBlueBoxData]=useState('');
    
    const getBlueBoxData =(data)=>{
        setBlueBoxData(data)
    }

    return (
        <>
            <div className='popup-overlay' >

                <div className='popup-content'>
                    <Header textDisplay="Saving Segment" onClose={props.onClose} />               

                    <div className='main-popup-content'>
                        <div className='enter-segment-input-box-wrapper' style={{margin:'10px'}}>
                            <label htmlFor="name"><span className='label-name'>Enter the Name of the Segment</span></label><br />
                            <br></br>
                            <input type="text"
                                className="enter-segment-input-box"
                                id="name"
                                name="name of the segment"
                                placeholder='Name of the segment'
                                required
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                            />
                        </div>
                        <p style={{ fontWeight: "normal", fontSize: "16px",margin:'10px' }}>To save your segment, you need to add the schemas to build the query </p> 
                        <div className='traits-wrapper'>
                            <Traits />
                        </div>
                        <div className='BlueBox-wrapper'>
                            <BlueBox getBlueBoxData={getBlueBoxData} />
                        </div>

                    </div>
 
                    <div>
                        < Footer segmentName={inputData} onClose={props.onClose} blueBoxData={BlueBoxData}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SegmentPopUp