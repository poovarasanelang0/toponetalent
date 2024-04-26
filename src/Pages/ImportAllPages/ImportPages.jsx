import React from 'react'
import Home from '../Home/Home'

import Footer from '../../Component/Footer/Footer'
import HotInsights from '../HotInsights/HotInsights'
import Header from '../../Component/Header/Header'
import Accordion from '../../Accordion/Accordion'


const ImportPages = () => {
  return (
    <div>
      <Header />
        <Home />
        <HotInsights />
        <Accordion />
       
        <Footer />
      
    </div>
  )
}

export default ImportPages
