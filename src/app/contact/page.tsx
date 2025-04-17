import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import ContactForm from '../../components/Contact/ContactForm'
import ContactInfo from '../../components/Contact/ContactInfo'
import GoogleMap from '../../components/Contact/GoogleMap'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contact Us" />

      <ContactInfo />

      <GoogleMap />

      <ContactForm />

      <Footer />
    </>
  )
}
