'use client'

import Image from 'next/image'
import React from 'react'

import newsletter from '../../../../../public/images/bigdata-analytics/newsletter.jpg'

const NewsletterStyleTwo = () => {
  return (
    <>
      <div className="newsletter-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="newsletter-image">
                <Image src={newsletter} alt="image" width={985} height={600} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="newsletter-content">
                <h2>Start your free trial</h2>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your business email here"
                  />
                  <button type="submit">Sign Up Free</button>
                </form>

                <p>
                  Test out the Big Data Analytics features for 14 days, no
                  credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsletterStyleTwo
