import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import ServicesStyle5 from '../../components/Services/ServicesStyle5'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Five" />

      <ServicesStyle5 />

      <Footer />
    </>
  )
}
