import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import ServicesStyle2 from '../../components/Services/ServicesStyle2'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Two" />

      <ServicesStyle2 />

      <Footer />
    </>
  )
}
