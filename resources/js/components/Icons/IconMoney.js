import React from 'react'

const IconMoney = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
      <path
        fillRule='nonzero' d='M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M8,9c0.2-0.9,0.8-1.6,1.6-1.9
        c0.8-0.3,1.8-0.1,2.4,0.5l1.7-1.1c-1.2-1.3-3-1.8-4.7-1.2C7.4,5.8,6.2,7.2,6,9H5v2h1c0.2,1.8,1.4,3.2,3.1,3.8
        c1.7,0.5,3.5,0.1,4.7-1.2l-1.7-1.1c-0.7,0.6-1.6,0.7-2.4,0.5c-0.8-0.3-1.5-1-1.6-1.9l5,0V9L8,9L8,9z'
      />
    </svg>
  )
}

export default IconMoney
