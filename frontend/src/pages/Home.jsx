import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsLetter from '../components/NewsLetter'
import Spotlight from '../components/Spotlight'
import BrandPhilosophy from '../components/BrandPhilosophy'
import EditorialLookbook from '../components/EditorialLookBook'
import MasterHead from '../components/MasterHead'
import Teaser from '../components/Teaser'
import BottomTeaser from '../components/BottomTeaser'

const Home = () => {
  return (
    <div className='bg-[#fcfcfc]'>      
      <MasterHead/>
      <Teaser/>
      <div className="h-32 md:h-64"></div>
      <Hero/>  
      <div className="flex flex-col gap-32 md:gap-64 mt-32 md:mt-64 pb-32">
        <Spotlight/>
        <LatestCollection/>
        <BrandPhilosophy/>
        <EditorialLookbook/>
        <BottomTeaser/>        
        <BestSeller/>
        <Policy/>
        <NewsLetter/>
     </div>  
     
    </div>
  )
}

export default Home
