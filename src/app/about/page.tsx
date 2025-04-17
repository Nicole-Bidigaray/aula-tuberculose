import React from 'react'

import AboutUsContent1 from '../../components/AboutUs/AboutUsContent1'
import FunFactsArea from '../../components/Common/FunFactsArea'
import PageBanner from '../../components/Common/PageBanner'
import Partner from '../../components/Common/Partner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent1 />

      <Partner />

      <FunFactsArea />

      <Footer />
    </>
  )
}
