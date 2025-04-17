import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import ProjectsCardStyle2 from '../../components/Projects/ProjectsCardStyle2'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Style Two" />

      <ProjectsCardStyle2 />

      <Footer />
    </>
  )
}
