import React , {useState} from 'react';
import Header from "./Header";
import SegmentPopUp from './SegmentPopUp';

const HomePage = () => {
  const [isPopup,setIsPopUP] = useState(false) ;

  const OnClickShowSegment= ()=>{

        setIsPopUP(true)
        // console.log(isPopup)
  }

  const OnClickCloseSegment = ()=>{
    setIsPopUP(false)
  }

  return (
    <div className="homepage">

       <Header textDisplay= "View Segment"  />

       <div>
        <p>Assignment for CustomLabs</p>
       </div>
       
      <button className='Show-segment-button' onClick={OnClickShowSegment}>Show segment</button>
      {isPopup && <SegmentPopUp onClose={OnClickCloseSegment} />}

    </div>
  )

}

export default HomePage;