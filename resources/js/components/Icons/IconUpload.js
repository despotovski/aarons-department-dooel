import React from 'react'

const IconUpload = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 19'>
      <path
        fillRule='nonzero' d='M0,12.5C0,10.3,1.2,8.2,3.1,7C3.6,3,7,0,11,0s7.4,3,7.9,7c2.4,1.5,3.5,4.3,2.9,7.1c-0.7,2.7-3,4.7-5.8,4.9
        L6,19C2.6,18.7,0,15.9,0,12.5z M15.8,17c1.9-0.1,3.6-1.5,4-3.4c0.5-1.9-0.3-3.9-2-4.9l-0.8-0.5L17,7.2C16.6,4.2,14,2,11,2
        S5.4,4.2,5,7.2L4.9,8.2L4.1,8.7c-1.7,1-2.5,3-2,4.9s2.1,3.3,4,3.4l0.2,0h9.4L15.8,17L15.8,17z M12,10h3l-4,5l-4-5h3V6h2V10z'
      />
    </svg>
  )
}

export default IconUpload
