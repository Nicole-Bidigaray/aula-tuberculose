import React from 'react'

import BlogPost from '../../components/Common/BlogPost'
import Feedback from '../../components/Common/Feedback'
import FunFactsArea from '../../components/Common/FunFactsArea'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import AboutUsContent from '../../components/DadosAnalises/AboutUsContent'
import CTA from '../../components/DadosAnalises/CTA'
import MainBanner from '../../components/DadosAnalises/MainBanner'
import Services from '../../components/DadosAnalises/Services'
import Team from '../../components/DadosAnalises/Team'
import WhyChoose from '../../components/DadosAnalises/WhyChoose'

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
