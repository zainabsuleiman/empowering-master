import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box'> 
       <div className='a-b-img'>
        <img src={props.image} />
       </div>
       <div className='sb-text'>
        <h2>{props.title}</h2>
        <p>Promoting Economic Empowerment of Women At work .  </p>
       </div>
    </div>
  )
}

export default FeatureBox;