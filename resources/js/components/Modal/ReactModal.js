import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Modal from 'react-modal'
import classNames from 'classnames'

Modal.setAppElement('#app')

const ReactModal = forwardRef(
  (props, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)
    const {
      className,
      overlayClassName,
      showCloseButton = true,
      onRequestClose = true,
      displayHeader = true
    } = props
    const modalClass = classNames('Content', className)
    const modalOverlayClass = classNames('Overlay', overlayClassName)

    useImperativeHandle(
      ref,
      () => ({
        setContent (contentTitle, contentBody) {
          setContent(contentTitle, contentBody)
        },

        open () {
          open()
        },

        close () {
          close()
        }
      })
    )
    const setContent = (contentTitle, contentBody, openModal = true) => {
      setTitle(contentTitle ?? null)
      setBody(contentBody ?? null)
      setIsOpen(openModal)
    }

    const open = () => {
      setIsOpen(true)
    }

    const close = () => {
      setIsOpen(false)
    }

    return (
      <Modal
        className={modalClass}
        overlayClassName={modalOverlayClass}
        isOpen={isOpen}
        onRequestClose={() => onRequestClose && close()}
        shouldCloseOnOverlayClick={false}
      >
        {displayHeader &&
          <div className={`modal-header ${!title || !title.length ? 'modal-no-border' : ''}`}>
            {title &&
              <h1>{title}</h1>}

            {showCloseButton &&
              <button onClick={close} className='modal-btn-close' />}
          </div>}
        <div className='modal-body'>
          {body}
        </div>
      </Modal>
    )
  }
)

export default ReactModal
