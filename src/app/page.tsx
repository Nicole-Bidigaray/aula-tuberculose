import React from 'react'

import BlogPost from '../components/Common/BlogPost'
import Feedback from '../components/Common/Feedback'
import FunFactsArea from '../components/Common/FunFactsArea'
import Partner from '../components/Common/Partner'
import RecentWorks from '../components/Common/RecentWorks'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import PricingStyleOne from '../components/PricingPlans/PricingStyleOne'

export default function Home() {
  return (
    <>
      <Navbar />

      <FunFactsArea />

      <RecentWorks />

      <PricingStyleOne />

      <Feedback />

      <Partner />

      <BlogPost />

      <Footer />
    </>
  )
}
