import React from 'react'

import BlogWithRightSidebar from '../../components/Blog/BlogWithRightSidebar'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Right Sidebar" />

      <BlogWithRightSidebar />

      <Footer />
    </>
  )
}
