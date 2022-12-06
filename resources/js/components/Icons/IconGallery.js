import React from 'react'

const IconGallery = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M17.4,19c-0.8-2.4-2.3-3.9-4.3-5.6c1.9-1.6,4.4-2.4,6.9-2.4V3h1c0.5,0,1,0.4,1,1v16c0,0.5-0.4,1-1,1
        H3c-0.5,0-1-0.4-1-1V4c0-0.5,0.4-1,1-1h3V1h2v4H4v7c5.2,0,9.7,2.5,11.3,7H17.4z M18,1v4h-8V3h6V1H18z M16.5,10
        C15.7,10,15,9.3,15,8.5S15.7,7,16.5,7C17.3,7,18,7.7,18,8.5S17.3,10,16.5,10L16.5,10z'
      />
    </svg>
  )
}
export default IconGallery
