import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import TermsConditionsContent from '../../components/TermsConditions/TermsConditionsContent'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Term & Condition" />

      <TermsConditionsContent />

      <Footer />
    </>
  )
}
