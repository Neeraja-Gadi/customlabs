import React from 'react';
import { GoDotFill } from "react-icons/go";

const Traits = () => {
  return (
    <div className='traits-Container'>
      <div className='user-traits'>
        <GoDotFill style={{ color: 'green' }} />

        <span>- User Traits</span>
      </div>
      <div className='group-traits'>
        <GoDotFill style={{ color: 'red' }} />
        <span> - Group Traits</span>
      </div>
    </div>
  )
}

export default Traits;