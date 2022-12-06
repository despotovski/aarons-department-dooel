import React from 'react'

const IconWallet = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 14'>
      <path d='M14,0c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1H2.5C2.2,2,2,2.2,2,2.5S2.2,3,2.5,3H14c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2
        H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2H14z M13,9.5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S12.4,9.5,13,9.5z'
      />
    </svg>
  )
}

export default IconWallet
