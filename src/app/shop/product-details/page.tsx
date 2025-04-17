import React from 'react'

import PageBanner from '../../../components/Common/PageBanner'
import Footer from '../../../components/Layout/Footer'
import Navbar from '../../../components/Layout/Navbar'
import ProductDetailsContent from '../../../components/Shop/ProductDetailsContent'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Product Details" />

      <ProductDetailsContent />

      <Footer />
    </>
  )
}
