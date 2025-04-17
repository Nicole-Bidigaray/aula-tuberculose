import React from 'react'

import BlogGridPost3 from '../../components/Blog/BlogGridPostStyle3'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogGridPost3 />

      <Footer />
    </>
  )
}
