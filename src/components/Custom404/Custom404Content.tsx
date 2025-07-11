'use client'

import Link from 'next/link'
import React from 'react'

const Custom404Content = () => {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <div className="notfound-404">
                  <h1>Oops!</h1>
                </div>
                <h3>404 - Page not found</h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>

                <Link href="/" className="btn btn-primary">
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Custom404Content
