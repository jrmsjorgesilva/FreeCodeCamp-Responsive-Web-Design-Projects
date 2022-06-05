import React from 'react'
import LandingPageHero from './LandingPageHero'
import LandingPageForm from './LandingPageForm'
import LandingPageFeatures from './LandingPageFeatures'
import VideoSection from '../VideoSection'
import LandingPagePrice from './LandingPagePrice'

const LandingPageContent = () => {
  return (
    <>
      <LandingPageHero />
      <LandingPageFeatures />
      <VideoSection />
      <LandingPageForm />
      <LandingPagePrice />
    </>
  )
}

export default LandingPageContent