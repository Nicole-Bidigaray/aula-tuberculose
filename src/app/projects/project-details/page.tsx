import React from 'react'

import PageBanner from '../../../components/Common/PageBanner'
import Footer from '../../../components/Layout/Footer'
import Navbar from '../../../components/Layout/Navbar'
import ProjectsDetailsContent from '../../../components/Projects/ProjectsDetailsContent'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Details" />

      <ProjectsDetailsContent />

      <Footer />
    </>
  )
}
