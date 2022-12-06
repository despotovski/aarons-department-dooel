import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'
import { ToastProvider } from 'react-toast-notifications'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

require('./bootstrap')

const el = document.getElementById('app')

/**
 * inertia progress init
 */
InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: '#29d',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false
})


/**
 * page data init
 */
const initialPageData = JSON.parse(el.dataset.page)


/**
 * ie8n init
 */
i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: initialPageData.props.translations,
    lng: initialPageData.props.app.locale,
    fallbackLng: 'en',
    returnObjects: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

render(
  <ToastProvider autoDismiss>
    <App
      initialPage={initialPageData}
      resolveComponent={name => import(`./domain/${name}`).then(module => module.default)}
    />
  </ToastProvider>,
  el)
