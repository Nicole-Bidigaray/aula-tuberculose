import React from 'react'

import PageBanner from '../../../components/Common/PageBanner'
import FeatureDetailsContent from '../../../components/Features/FeatureDetailsContent'
import Footer from '../../../components/Layout/Footer'
import Navbar from '../../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Feature Details" />

      <FeatureDetailsContent />

      <Footer />
    </>
  )
}
