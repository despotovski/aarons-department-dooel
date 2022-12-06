import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FieldWrapper } from './FieldWrapper'
import { FieldError } from './FieldError'
import { useTranslation } from 'react-i18next'
import { IconUpload } from '../../Icons'

export const ImageDropzone = ({ formField, value, onChange, errors, showOnly, onDropRejectedCallback }) => {
  const {
    wrapper, // wrapper for the element
    label, // label of the element
    name, // name of the element
    initialValue // initial value of the element
  } = formField

  const { t } = useTranslation()

  const [dropZoneStyle, setDropZoneStyle] = useState({
    backgroundImage: initialValue ? `url("${initialValue}")` : 'none'
  })

  const onDrop = useCallback(acceptedFiles => {
    setDropZoneStyle({
      backgroundImage: acceptedFiles.length ? `url(${URL.createObjectURL(acceptedFiles[0])})` : 'none'
    })
    onChange(acceptedFiles[0])
  }, [])

  const onDropRejected = (files) => {
    const image = files[0]
    const errors = {}

    if (image.errors[0].code === 'file-invalid-type') {
      errors[name] = [
        t('ui.file_not_allowed')
      ]
    }
    if (image.errors[0].code === 'file-too-large') {
      errors[name] = [
        t('ui.max_file_size')
      ]
    }
    onDropRejectedCallback(errors)
  }

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    maxSize: 2097152,
    accept: 'image/jpeg,image/png,image/gif'
  })

  if (showOnly) {
    return (
      <FieldWrapper wrapper={wrapper}>
        <div className='field-wrapper-selector input-element'>

          {label &&
            <label htmlFor={name}>{label}</label>}

          {initialValue
            ? <img className='full-width-profile-picture' src={initialValue} alt={name} />
            : '/'}
        </div>
      </FieldWrapper>
    )
  }

  return (
    <FieldWrapper wrapper={wrapper}>
      <div className='dropzone-upload-image'>
        {label &&
          <label htmlFor={name}>{label}</label>}

        <div {...getRootProps()} className='dropzone' style={dropZoneStyle}>

          <input {...getInputProps()} />

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
    </FieldWrapper>
  )
}

// export class ImageDropzone extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.onDrop = (files) => {
//             this.setState({
//                 files: files,
//                 bgImg: files.length ? `url(${URL.createObjectURL(files[0])})` : 'none'
//             });
//
//             props.onChange(files, props.formField.name);
//         };
//
//         this.state = {
//             files: [],
//             bgImg: props.formField.value ? `url("${props.formField.value}")` : 'none'
//         };
//     }
//
//     render() {
//         const { files, bgImg } = this.state;
//         const {formField, options, onChange, hasErrors, errors} = this.props;
//
//         // const thumbs = files.map(file => (
//         //     <div style={thumb} key={file.name}>
//         //         <div style={thumbInner}>
//         //             <img
//         //                 src={URL.createObjectURL(file)}
//         //                 style={img}
//         //                 alt={file.name}
//         //             />
//         //         </div>
//         //     </div>
//         // ));
//
//         const dropzone = {
//             backgroundImage: bgImg
//         };
//
//         return (
//             <FieldWrapper wrapper={formField.wrapper}>
//                 {formField.label &&
//                     <label htmlFor={formField.name}>{formField.label}</label>
//                 }
//
//                 <Dropzone
//                     accept="image/jpeg,image/png,image/bmp,image/gif"
//                     onDrop={this.onDrop}
//                     multiple={false}
//                 >
//                     {
//                         ({getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject}) => {
//                             let placeholder = <div className="dropzone-placeholder">
//                                 <p>Drag your picture here or</p>
//                                 <button className="btn-upload" type="button">{<IconUpload />}Upload</button>
//                             </div>;
//
//                             if (isDragAccept) {
//                                 placeholder = <p className="text-success">Drop file here :)</p>;
//                             }
//
//                             if (isDragReject) {
//                                 placeholder = <p className="text-danger">File not allowed!</p>
//                             }
//
//                             return (
//                                 <div {...getRootProps({className: 'dropzone'})} style={dropzone}>
//                                     <input {...getInputProps()} name={formField.name}/>
//                                     {placeholder}
//                                 </div>
//                             )
//                         }
//                     }
//                 </Dropzone>
//
//                 <FieldError name={formField.name} hasErrors={hasErrors} errors={errors}/>
//             </FieldWrapper>
//         );
//     }
// }
