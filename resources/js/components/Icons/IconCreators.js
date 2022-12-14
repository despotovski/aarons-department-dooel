import React from 'react'

const IconCreators = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z M12,4c-4.4,0-8,3.6-8,8s3.6,8,8,8
        s8-3.6,8-8S16.4,4,12,4z M9,8c1.1,0,2.1,0.4,2.8,1.2l-1.4,1.4C9.8,10,9,9.8,8.2,10.2S7,11.2,7,12c0,0.8,0.5,1.5,1.2,1.8
        c0.7,0.3,1.6,0.1,2.2-0.4l1.4,1.4C10.7,16,9,16.3,7.5,15.7C6,15.1,5,13.6,5,12C5,9.8,6.8,8,9,8L9,8z M16,8c1.1,0,2.1,0.4,2.8,1.2
        l-1.4,1.4c-0.6-0.6-1.4-0.7-2.2-0.4c-0.7,0.3-1.2,1-1.2,1.8c0,0.8,0.5,1.5,1.2,1.8c0.7,0.3,1.6,0.1,2.2-0.4l1.4,1.4
        c-1.1,1.1-2.9,1.5-4.4,0.9C13,15.1,12,13.6,12,12C12,9.8,13.8,8,16,8L16,8z'
      />
    </svg>
  )
}
export default IconCreators
