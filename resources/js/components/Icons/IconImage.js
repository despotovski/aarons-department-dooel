import React from 'react'

const IconImage = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M20,5H4v14l9.3-9.3c0.4-0.4,1-0.4,1.4,0L20,15V5z M2,4c0-0.5,0.4-1,1-1h18c0.5,0,1,0.4,1,1v16
        c0,0.5-0.4,1-1,1H3c-0.5,0-1-0.4-1-1V4z M8,11c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,11,8,11z'
      />
    </svg>
  )
}
export default IconImage
