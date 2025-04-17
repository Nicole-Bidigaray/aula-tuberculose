import React from 'react'

import Feedback from '../../components/Common/Feedback'
import FeedbackStyleFive from '../../components/Common/FeedbackStyleFive'
import FeedbackStyleFour from '../../components/Common/FeedbackStyleFour'
import FeedbackStyleThree from '../../components/Common/FeedbackStyleThree'
import FeedbackStyleTwo from '../../components/Common/FeedbackStyleTwo'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Feedback or Testimonials" />

      <Feedback />

      <FeedbackStyleTwo />

      <FeedbackStyleThree />

      <FeedbackStyleFour />

      <FeedbackStyleFive />

      <Footer />
    </>
  )
}
