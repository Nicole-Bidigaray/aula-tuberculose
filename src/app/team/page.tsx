import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import TeamMembers from '../../components/Team/TeamMembers'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Team" />

      <TeamMembers />

      <Footer />
    </>
  )
}
