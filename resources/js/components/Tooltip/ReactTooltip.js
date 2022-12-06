import React from 'react'
import Tooltip from 'react-simple-tooltip'

const ReactTooltip = ({ content, placement, children }) => {
  return (
    <Tooltip
      content={content}
      placement={placement ?? 'left'}
      radius={5}
      padding={10}
      fadeDuration={300}
      fadeEasing='ease-in-out'
      style={{ whiteSpace: 'nowrap', fontFamily: 'Klima-Regular, sans-serif', fontSize: '0.875rem' }}
    >
      {children}
    </Tooltip>
  )
}

export default ReactTooltip
