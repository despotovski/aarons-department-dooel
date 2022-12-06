import React from 'react'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { usePage } from '@inertiajs/inertia-react'
import Recaptcha from 'reaptcha'

export const ReCaptcha = ({ formField, value, onChange, errors }) => {
  const {
    wrapper // wrapper for the element
  } = formField

  const { recaptchaSiteKey, app } = usePage().props

  return (
    <FieldWrapper wrapper={wrapper}>
      <div>
        {recaptchaSiteKey &&
          <Recaptcha
            sitekey={recaptchaSiteKey}
            onVerify={(e) => onChange(e)}
            hl={app.locale}
          />}
        <FieldError errors={errors} />
      </div>
    </FieldWrapper>
  )
}
