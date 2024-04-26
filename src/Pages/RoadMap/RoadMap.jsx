import React from 'react'
import roadmap from "../RoadMap/Assets/six_months_business_roadmap_highlighting_candidate_hiring_plan_slide01.jpg"
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
const RoadMap = () => {
  return (
    <>
    <Header />
    <div className='container my-2'>
        <h1>Roadmap</h1>
        <img src={roadmap} alt="dd" className='img-fluid' />

    </div>
    <Footer />

      
    </>
  )
}

export default RoadMap
