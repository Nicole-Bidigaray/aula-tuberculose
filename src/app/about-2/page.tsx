import React from 'react'

import Partner from '@/components/Common/Partner'

import AboutUsContent2 from '../../components/AboutUs/AboutUsContent2'
import FeedbackStyleFour from '../../components/Common/FeedbackStyleFour'
import FunFactsArea from '../../components/Common/FunFactsArea'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent2 />

      <FeedbackStyleFour />

      <FunFactsArea />

      <div className="pb-80">
        <Partner />
      </div>

      <Footer />
    </>
  )
}
