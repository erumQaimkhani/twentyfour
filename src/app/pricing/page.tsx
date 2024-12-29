import React from 'react'
import Priceheader from '../Components/priceheader'
import Fa from '../Components/fa'
import Pra from '../Components/pra'
import LogosSection from '../Components/logosection'
import Free from '../Components/free'
import Footer from '../Components/footer'

export default function Pricing() {
  return (
    <div>
        <Priceheader  />
        <Pra  />
        <LogosSection />
        <Fa />
        <Free />
        <Footer />
    </div>
  )
}
