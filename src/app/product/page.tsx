import React from 'react'
import Greenheader from '../Components/greenheader'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import Flot from '../Components/flot'

import Review3 from '../Components/reviw3'

import Review from '../Components/reviw'
import Footer from '../Components/footer'
import LogosSection from '../Components/logosection'

export default function Product() {
  return (
    <div>
        <Greenheader />
        
        <Breadcrumb />
        <Flot />
        <Review />
  
        <Review3 />
        <LogosSection />
        <Footer />
        
    </div>
  )
}
