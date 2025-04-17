import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import FaqContent from '../../components/FAQ/FaqContent'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="FAQ" />

      <FaqContent />

      <Footer />
    </>
  )
}
