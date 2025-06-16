import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import OurFeatures from '../../components/Features/OurFeatures'
import SingleFeatures from '../../components/Features/SingleFeatures'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Ajuda" />

      <OurFeatures />

      <SingleFeatures />

      <Footer />
    </>
  )
}
