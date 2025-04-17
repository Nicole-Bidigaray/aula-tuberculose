import React from 'react'

import BlogPost from '../../components/Common/BlogPost'
import Feedback from '../../components/Common/Feedback'
import FunFactsArea from '../../components/Common/FunFactsArea'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import AboutUsContent from '../../components/PCRepair/AboutUsContent'
import CTA from '../../components/PCRepair/CTA'
import MainBanner from '../../components/PCRepair/MainBanner'
import Services from '../../components/PCRepair/Services'
import Team from '../../components/PCRepair/Team'
import WhyChoose from '../../components/PCRepair/WhyChoose'

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutUsContent />

      <Services />

      <CTA />

      <FunFactsArea />

      <Team />

      <Feedback />

      <WhyChoose />

      <BlogPost />

      <Footer />
    </>
  )
}
