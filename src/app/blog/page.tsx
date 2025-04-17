import React from 'react'

import BlogGridPost from '../../components/Blog/BlogGridPost'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogGridPost />

      <Footer />
    </>
  )
}
