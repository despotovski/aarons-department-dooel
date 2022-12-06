import React from 'react'
import SideMenu from './SideMenu'
import Header from './Header'
import ToastMessages from '../../ToastMessages'

const LayoutAdmin = (props) => {
  return (
    <div id='main-layout' className='admin-page'>
      <Header />
      <SideMenu />
      <main id='main'>
        <div className='container'>
          {props.children}
        </div>
      </main>
      <ToastMessages />
    </div>
  )
}

export default LayoutAdmin
