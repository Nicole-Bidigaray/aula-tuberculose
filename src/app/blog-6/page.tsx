import React from 'react'

import BlogWithRightSidebarStyle3 from '../../components/Blog/BlogWithRightSidebarStyle3'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogWithRightSidebarStyle3 />

      <Footer />
    </>
  )
}
