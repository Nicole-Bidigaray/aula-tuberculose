'use client'

import Link from 'next/link'
import React from 'react'

const CTAStyleTwo = () => {
  return (
    <>
      <div className="agency-cta-area ptb-80">
        <div className="container">
          <div className="agency-cta-content">
            <h2>Do you have any projects?</h2>

            <Link href="/contatos" className="btn btn-gradient">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CTAStyleTwo
