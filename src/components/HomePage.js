import React , {useState} from 'react';
import Header from "./Header";
import SegmentPopUp from './SegmentPopUp';

const HomePage = () => {
  const [isPopup,setIsPopUP] = useState(false) ;

  const OnClickShowSegment= ()=>{

        setIsPopUP(true)
        // console.log(isPopup)
  }

  return (
    <div className='homepage'>

       <Header textDisplay= "View Segment"/>
       
      <button className='Show-segment-button' onClick={OnClickShowSegment}>Show segment</button>
      {isPopup && <SegmentPopUp />}

    </div>
  )

}

export default HomePage;