import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AdminLogin from './Admin/AdminLogin'
import AdminDashboard from './Admin/AdminDashboard'
import AdminSecure from './Admin/AdminSecure'
import AdminNavBar from './Admin/AdminNavBar'
import AdminAccount from './Admin/AdminAccount'
import AdminProject from './Admin/AdminProject' 
import AdminStatistics from './Admin/AdminStatistics'
import AdminChart from './Admin/AdminFeedbackChart'
import AdminTestimonialsChart from './Admin/AdminTestimonialsChart'
function App() {
  const location = useLocation()
  const isAdminPage = location.pathname.startsWith('/admin')

  return (
    <>
    <section className={isAdminPage? "flex lg:flex-row flex-col-reverse lg:justify-between item-start lg:gap-20":""}>
      {isAdminPage && <AdminNavBar/>}
      <Routes>
      <Route element={<AdminSecure/>}>
        <Route path="/loginAdmin" element={<AdminLogin />} />
        <Route path = "/adminDashboard" element={<AdminDashboard />} />
        <Route path = "/adminNavbar" element = {<AdminNavBar/>}/>
        <Route path = "/adminProject" element = {<AdminProject/>}/>
        <Route path = "/adminStatistics" element={<AdminStatistics/>}/>
        <Route path = "/adminAccount" element = {<AdminAccount/>}/>
        <Route path = "/adminChart" element={<AdminChart/>}/>
        <Route path = "/adminTestimonialChart" element={<AdminTestimonialsChart/>}/>
        </Route>
      </Routes>
    </section>
    </>
  )
}

export default App
