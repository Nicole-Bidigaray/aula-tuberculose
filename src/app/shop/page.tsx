import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import ProductCard from '../../components/Shop/ProductCard'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Products" />

      <ProductCard />

      <Footer />
    </>
  )
}
