import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styledLayout from './layout.module.scss'


const Layout = ({children}) => {
  return (
      <div className={styledLayout.container}>
        <div className={styledLayout.content}>
          <Header />
          {children}
        </div>
          <Footer />
      </div>
  ) 
}

export default Layout
