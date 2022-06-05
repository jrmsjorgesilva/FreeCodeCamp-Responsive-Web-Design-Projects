import React from 'react'
import LandingPageHero from './LandingPageHero'
import LandingPageForm from './LandingPageForm'
import LandingPageFeatures from './LandingPageFeatures'
import VideoSection from '../VideoSection'
import LandingPagePrice from './LandingPagePrice'
import LandingPageDemo from './LandingPageDemo'

const LandingPageContent = () => {
  return (
    <>
      <LandingPageHero />
      <LandingPageFeatures />
      <VideoSection />
      <LandingPageForm />
      <LandingPagePrice />
      <LandingPageDemo />
    </>
  )
}

export default LandingPageContent