import React from 'react'
import { Link } from 'react-router'
import ProjectColored from '../assets/icons/ProjectColored.svg'
import FeedbackColored from '../assets/icons/FeedbackColored.svg'
import TestimonialsColored from '../assets/icons/TestimonialsColored.svg'
import AdminChart from './AdminFeedbackChart'
import AdminTestimonialsChart from './AdminTestimonialsChart'
function AdminDashboard() {
  return (
    <>
    <section className='admin-section'>
      <div className='admin-header'>
        Dashboard
      </div>
      <div className='dashboard-content'>
        <div className='summary-container'>
          <article className='summary-article'>Projects</article>
          <span className='flex flex-row items-center gap-2 lg:gap-5 font-semibold justify-center'>
          <img src={ProjectColored} alt="" />
          <label>0</label>
          </span>
        </div>
        <div className='summary-container'>
          <article className='summary-article'>Feedback</article>
          <span className='flex flex-row items-center gap-2 lg:gap-5 font-semibold justify-center'>
          <img src={FeedbackColored} alt="" />
          <label>0</label>
          </span>
        </div>
        <div className='summary-container'>
          <article className='summary-article'>Testimonials</article>
          <span className='flex flex-row items-center gap-2 lg:gap-5 font-semibold justify-center'>
          <img src={TestimonialsColored} alt="" />
          <label>0</label>
          </span>
        </div>
      </div>
      <section className='grid lg:grid-cols-2 grid-rows-1 gap-2 m-1 lg:m-5'>
        <div className='chart-container'>
          <AdminChart/>
          <Link to='/adminStatistics' className='w-full'>
          <button className='w-full'>View</button>
          </Link>
        </div>
        <div className='chart-container'>
          <AdminTestimonialsChart/>
          <Link to='/adminStatistics' className='w-full'>
          <button className='w-full'>View</button>
          </Link>
        </div>
      </section>
    </section>
    </>
  )
}

export default AdminDashboard
