import React from 'react'

import Partner from '@/components/Common/Partner'

import AboutUsContent3 from '../../components/AboutUs/AboutUsContent3'
import FeedbackStyleThree from '../../components/Common/FeedbackStyleThree'
import FunFactsArea from '../../components/Common/FunFactsArea'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent3 />

      <FeedbackStyleThree />

      <FunFactsArea />

      <div className="pb-80">
        <Partner />
      </div>

      <Footer />
    </>
  )
}
