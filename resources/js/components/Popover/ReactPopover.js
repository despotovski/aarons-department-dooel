import React, { useState } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'

const ReactPopover = ({ content, position, children, closeOnClickOutside = true }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <Popover
      isOpen={isPopoverOpen}
      onClickOutside={() => closeOnClickOutside && setIsPopoverOpen(false)}
      positions={position || ['bottom']}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor='white'
          arrowSize={10}
          arrowStyle={{ opacity: 1 }}
          className='popover-arrow-container'
          arrowClassName='popover-arrow'
        >
          {content}
        </ArrowContainer>
      )}
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>{children}</div>
    </Popover>
  )
}

export default ReactPopover
