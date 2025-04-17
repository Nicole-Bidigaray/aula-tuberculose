import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import ServicesStyle4 from '../../components/Services/ServicesStyle4'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Four" />

      <ServicesStyle4 />

      <Footer />
    </>
  )
}
