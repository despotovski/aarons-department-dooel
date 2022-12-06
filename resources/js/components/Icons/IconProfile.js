import React from 'react'

const IconProfile = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} fillRule='nonzero' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 17'>
      <path d='M8.5,0C13.2,0,17,3.8,17,8.5S13.2,17,8.5,17S0,13.2,0,8.5S3.8,0,8.5,0z M3.4,11.4c1.2,1.9,3.1,3,5.2,3
      c2.1,0,4-1.2,5.2-3c-1.4-1.3-3.3-2.1-5.2-2.1C6.7,9.3,4.8,10.1,3.4,11.4L3.4,11.4z M8.5,7.7c1.4,0,2.6-1.1,2.6-2.6S9.9,2.5,8.5,2.5
      S5.9,3.7,5.9,5.1S7.1,7.7,8.5,7.7z'
      />
    </svg>
  )
}

export default IconProfile
