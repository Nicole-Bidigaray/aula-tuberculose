import React from 'react'

import BlogPost from '../components/Common/BlogPost'
import FunFactsArea from '../components/Common/FunFactsArea'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import MainBanner from '@/components/DadosAnalises/MainBanner'
import AboutUsContent from '@/components/DadosAnalises/AboutUsContent'
import Services from '@/components/DadosAnalises/Services'
import CTA from '@/components/DadosAnalises/CTA'

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <AboutUsContent />

      <Services />

      <CTA />

      <FunFactsArea />

      <BlogPost />

      <Footer />
    </>
  )
}
