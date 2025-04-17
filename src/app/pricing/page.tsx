import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import PricingStyleFour from '../../components/PricingPlans/PricingStyleFour'
import PricingStyleOne from '../../components/PricingPlans/PricingStyleOne'
import PricingStyleTwo from '../../components/PricingPlans/PricingStyleTwo'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Pricing" />

      <PricingStyleOne />

      <PricingStyleTwo />

      <div className="pt-80">
        <PricingStyleFour />
      </div>

      <Footer />
    </>
  )
}
