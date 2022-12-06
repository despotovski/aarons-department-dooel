import React from 'react'

const IconCreators = ({ className }) => {
  return (
    <svg className={`svg-inline ${className || ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M8,4h13v2H8V4z M4.5,6.5C3.7,6.5,3,5.8,3,5s0.7-1.5,1.5-1.5S6,4.2,6,5S5.3,6.5,4.5,6.5z M4.5,13.5
        C3.7,13.5,3,12.8,3,12s0.7-1.5,1.5-1.5S6,11.2,6,12S5.3,13.5,4.5,13.5z M4.5,20.4c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5
        S6,18.1,6,18.9C6,19.7,5.3,20.4,4.5,20.4z M8,11h13v2H8V11z M8,18h13v2H8V18z'
      />
    </svg>
  )
}
export default IconCreators
