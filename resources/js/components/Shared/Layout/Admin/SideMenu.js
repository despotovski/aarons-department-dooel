import React, { useState } from 'react'
import { IconUsers, IconMenu, IconClose, } from '../../../../components/Icons'
import { usePage } from '@inertiajs/inertia-react'
import IconList from '../../../Icons/IconList'

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { links, url } = usePage().props

  return (
    <aside onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className={`aside-menu ${isOpen ? 'is-open' : ''}`} id='side-nav'>
      <div>
        <nav className='aside-menu__nav'>
          <button onClick={() => setIsOpen(!isOpen)} className='aside-menu__burger'>
            {isOpen ? <IconClose className='text-19 text-white stroke-current' /> : <IconMenu className='text-19' />}
          </button>
        </nav>

        <nav className='aside-menu-navigation__main'>
          <ul className='aside-menu-navigation__list'>
            <li className='aside-menu-navigation__list-item'>
              <a href={links.employee.index} className={`aside-menu-navigation__anchor ${url.current_uri === links.employee.index ? 'active' : ''}`}>
                <IconUsers className='text-22' />
                <span className='aside-menu-navigation__text'>Employees</span>
              </a>
            </li>
            <li className='aside-menu-navigation__list-item'>
              <a href={links.shift.index} className={`aside-menu-navigation__anchor ${url.current_uri === links.employee.index ? 'active' : ''}`}>
                <IconList className='text-22' />
                <span className='aside-menu-navigation__text'>Shifts</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default SideMenu
