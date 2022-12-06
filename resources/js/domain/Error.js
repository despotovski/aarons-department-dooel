import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { useTranslation } from 'react-i18next'
import { Link } from '../utils'
import errorIcon from '../../assets/icons/public/icon-error.svg'

export default function ErrorPage () {

  return (
    <ErrorContent />
  )
}

const ErrorContent = () => {
  const { t } = useTranslation()
  const { status } = usePage().props

  const title = {
    503: t('errors.503.title'),
    500: t('errors.500.title'),
    419: t('errors.419.title'),
    404: t('errors.404.title'),
    403: t('errors.403.title'),
    401: t('errors.401.title')
  }

  const description = {
    503: t('errors.503.description'),
    500: t('errors.500.description'),
    419: t('errors.419.description'),
    404: t('errors.404.description'),
    403: t('errors.403.description'),
    401: t('errors.401.description')
  }

  return (
    <div className='container mv-xxxl pv-xxxl'>
      <div className='row'>
        <div className='col-3'>
          <img src={errorIcon} alt='icon for error page' />
        </div>
        <div className='col-8 offset-1'>
          <h1 className='public-h1 page-header text-dark-blue-2 mt-xl'>{title[status] ?? title[500]}</h1>
          <h3 className='public-subtitle mb-md'>{description[status] ?? description[500]}</h3>
          <Link href='/' className='btn btn-primary btn-md'>
          BACK TO DASHBOARD
          </Link>
        </div>
      </div>
    </div>
  )
}
