
import React from 'react'
import { Routes } from 'react-router-dom'


import Services from '../components/Services/Services'
import ServiceList from '../Servicelist/ServiceList'

const Route = () => {
  return (
    <>
  <Routes>
      <Routes>
        <Route path="/" element={<Services/>} />
        <Route path="/service/:id" element={<ServiceList/>} />
      </Routes>
    </Routes>
    
    </>
  )
}

export default Route