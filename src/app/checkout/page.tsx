import React from 'react'

import CheckoutForm from '../../components/Checkout/CheckoutForm'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Checkout" />

      <CheckoutForm />

      <Footer />
    </>
  )
}
