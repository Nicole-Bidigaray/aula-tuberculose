import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import ServicesStyle1 from '../../components/Services/ServicesStyle1'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style One" />

      <ServicesStyle1 />

      <Footer />
    </>
  )
}
