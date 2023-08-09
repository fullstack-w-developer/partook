import React from 'react'
import CardBoxNotif from './CardBoxNotif'
import CardBox from './CardBox'
import PropertiesCard from './PropertiesCard'
import Chart from "./Chart"
import HeadDashboard from './HeadDashboard/HeadDashboard'

const Dashboard = () => {
  return (
    <div className='md:px-20 px-10 mt-10 pb-10'>
      <HeadDashboard />
      <CardBoxNotif />
      <CardBox />
      <Chart />
      <PropertiesCard />
    </div>
  )
}

export default Dashboard