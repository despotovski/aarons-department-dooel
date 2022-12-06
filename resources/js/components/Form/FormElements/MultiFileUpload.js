import React, { useCallback } from 'react'
import { FieldWrapper } from './FieldWrapper'
import { isRequiredFromRules } from '../../../utils'
import { FieldError } from './FieldError'
import { IconUpload } from '../../Icons'
import { useTranslation } from 'react-i18next'
import { useDropzone } from 'react-dropzone'

export const MultiFileUpload = ({ formField, errors, onChange, value }) => {
  const {
    wrapper, // wrapper for the element
    name, // name of the element
    type, // type of the element
    label, // label of the element
    description, // description on the field
    rules,
    isMulti = true // multi file select
  } = formField

  const onDrop = useCallback(acceptedFiles => {
    onChange(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: 2097152,
    accept: 'image/jpeg,image/png,image/gif,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  })

  const isRequired = isRequiredFromRules(rules)

  const { t } = useTranslation()

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='dropzone-upload-image'>
        {label &&
          <label htmlFor={name}>{label} {isRequired ? '*' : ''}</label>}

        <div {...getRootProps()} className='dropzone'>

          <input
            {...getInputProps()}
            type={type}
            multiple={isMulti}
            name={name}
            onChange={(e) => onChange(e.target.files)}
          />

          {isDragActive && isDragAccept &&
            <p>{t('ui.drop_files_here')}</p>}

          {isDragActive && isDragReject &&
            <p>{t('ui.file_not_allowed')}</p>}

          {!isDragActive &&
            <>
              <IconUpload className='icon-upload' />
              <p className='dropzone-text-b'>{t('ui.image_dropzone_placeholder')}</p>
            </>}
        </div>
      </div>

      <FieldError errors={errors} />
      {value && Object.values(value).map((file, i) => {
        return (
          <div key={'file_' + i}>
            <div className='message message-success categories-item'>
              <div className='word-break-all'>{file.name}</div>
            </div>
            <h5 className='input-error-message text-danger'>{errors[`files.${i}`] ?? ''}</h5>
          </div>
        )
      })}
      {errors.files && <h5 className='input-error-message text-danger'>{errors.files ?? ''}</h5>}
      {description && <p className='description'>{description}</p>}
    </FieldWrapper>
  )
}
