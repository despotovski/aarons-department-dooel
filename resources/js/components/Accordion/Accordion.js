import React from 'react'
import Collapse from '@kunukn/react-collapse'

export const Accordion = ({ children, isOpen, heading, onToggle, customWrapperClass, labelColor = '' }) => {
  const isOpenClass = isOpen ? ' open' : ''
  return (
    <div className={`accordion ${customWrapperClass || ''}`}>
      <div className={`accordion__button${isOpenClass}${labelColor}`} onClick={onToggle}>
        {heading}
      </div>
      <Collapse
        overflowOnExpanded
        isOpen={isOpen}
      >
        {children}
      </Collapse>
    </div>
  )
}
