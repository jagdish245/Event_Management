import React from 'react'
import Banner from './Banner.js'
import Description from './Description.js';
import Services from './Services';
import SlidingBanner from './SlidingBanner';
import Gallery from '../Gallery/Gallery.js';
import About from './About.js';
export default function Home() {

  return (
    <>
    <Banner />
    <Description />
    <SlidingBanner />
    <Services />
    <Gallery />
    <About />
    </>
  )
}
