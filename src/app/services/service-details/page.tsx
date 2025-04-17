import React from 'react'

import PageBanner from '../../../components/Common/PageBanner'
import Footer from '../../../components/Layout/Footer'
import Navbar from '../../../components/Layout/Navbar'
import ServiceDetailsContent from '../../../components/Services/ServiceDetailsContent'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Five" />

      <ServiceDetailsContent />

      <Footer />
    </>
  )
}
