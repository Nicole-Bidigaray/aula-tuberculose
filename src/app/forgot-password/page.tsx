import React from 'react'

import ForgotPasswordForm from '../../components/Auth/ForgotPasswordForm'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Forgot Password" />

      <ForgotPasswordForm />

      <Footer />
    </>
  )
}
