import React from 'react'

const Traits = () => {
  return (
    <div className='traits-Container'>
    <div className='user-traits'>
        <span className='user-traits-bullet'  style={{ backgroundColor: 'green' }}></span>

        <span>- User Traits</span>
    </div>
    <div className='group-traits'> 
        <span className='group-traits-bullet'  style={{ backgroundColor: 'red' }}></span>
      <span> - Group Traits</span>
  </div>
</div>
  )
}

export default Traits