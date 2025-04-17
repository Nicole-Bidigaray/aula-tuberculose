import React from 'react'

import BlogDetailsContent from '../../../components/Blog/BlogDetailsContent'
import PageBanner from '../../../components/Common/PageBanner'
import Footer from '../../../components/Layout/Footer'
import Navbar from '../../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Details" />

      <BlogDetailsContent />

      <Footer />
    </>
  )
}
