import React from 'react'

import BlogWithRightSidebarStyle2 from '../../components/Blog/BlogWithRightSidebarStyle2'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Right Sidebar" />

      <BlogWithRightSidebarStyle2 />

      <Footer />
    </>
  )
}
