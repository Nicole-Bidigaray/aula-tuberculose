import React from 'react'

import LoginForm from '../../components/Auth/LoginForm'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Login" />

      <LoginForm />

      <Footer />
    </>
  )
}
