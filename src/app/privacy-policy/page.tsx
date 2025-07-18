import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import PrivacyPolicyContent from '../../components/PrivacyPolicy/PrivacyPolicyContent'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Privacy Policy" />

      <PrivacyPolicyContent />

      <Footer />
    </>
  )
}
