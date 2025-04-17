import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import ServicesStyle3 from '../../components/Services/ServicesStyle3'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Three" />

      <ServicesStyle3 />

      <Footer />
    </>
  )
}
