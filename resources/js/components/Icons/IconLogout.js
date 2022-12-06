import React from 'react'

const IconLogout = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20'>
      <path
        fillRule='nonzero' d='M17,9H9v2h8v3l5-4l-5-4V9z M18,16h-2.7c-3.2,2.8-8.1,2.6-11.1-0.5s-3-8,0-11.1S12.1,1.2,15.3,4H18
      c-1.9-2.5-4.9-4-8-4C4.5,0,0,4.5,0,10s4.5,10,10,10C13.1,20,16.1,18.5,18,16L18,16z'
      />
    </svg>
  )
}

export default IconLogout
