import React, { useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'
import { usePage } from '@inertiajs/inertia-react'

const ToastMessages = () => {
  const { flash } = usePage().props
  const { addToast } = useToasts()

  useEffect(() => {
    if (flash.success) {
      addToast(flash.success, { appearance: 'success' })
    }
    if (flash.error) {
      addToast(flash.error, { appearance: 'error' })
    }
  }, [flash])

  return (
    <></>
  )
}

export default ToastMessages
