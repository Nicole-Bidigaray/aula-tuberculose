import React from 'react'

import SignUpForm from '../../components/Auth/SignUpForm'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Sign Up" />

      <SignUpForm />

      <Footer />
    </>
  )
}
