import React from 'react'

const IconHeart = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'>
      <path d='M6,1.6c1.4-1.2,3.5-1.2,4.8,0.1c1.3,1.3,1.4,3.4,0.1,4.8l-4.9,5l-4.9-5c-1.2-1.4-1.2-3.5,0.1-4.8
        C2.5,0.5,4.6,0.4,6,1.6z'
      />
    </svg>
  )
}
export default IconHeart
