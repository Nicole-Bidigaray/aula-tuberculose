import React from 'react'

import CartContent from '../../components/Cart/CartContent'
import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Cart" />

      <div className="cart-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <CartContent />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
