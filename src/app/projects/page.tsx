import React from 'react'

import PageBanner from '../../components/Common/PageBanner'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'
import ProjectsCardStyle1 from '../../components/Projects/ProjectsCardStyle1'

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Style One" />

      <ProjectsCardStyle1 />

      <Footer />
    </>
  )
}
