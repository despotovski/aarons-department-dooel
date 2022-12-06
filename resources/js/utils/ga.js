import ReactGA from 'react-ga'
import Cookies from 'js-cookie'

export const eventTrack = (category, action, label, value) => {
  if (Cookies.get('analytics-cookies') === 'true') {
    const data = {
      category: category,
      action: action,
      label: label
    }

    if (value) {
      data.value = value
    }

    ReactGA.event(data)
  }
}
