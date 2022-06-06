import React from 'react'
import LandingPageHero from './LandingPageHero'
import LandingPageForm from './LandingPageForm'
import LandingPageFeatures from './LandingPageFeatures'
import LandingPageVideo from './LandingPageVideo'
import LandingPagePrice from './LandingPagePrice'
import LandingPageDemo from './LandingPageDemo'
import LandingPageFooter from './LandingPageFooter'

const LandingPageContent = () => {
  return (
    <>
      <LandingPageHero />
      <LandingPageFeatures />
      <LandingPageVideo />
      <LandingPagePrice />
      <LandingPageDemo />
      <LandingPageForm />
      <LandingPageFooter />
    </>
  )
}

export default LandingPageContent