import React from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import AccountIcon from '../assets/icons/account.svg'
import DashboardIcon from '../assets/icons/Dashboard.svg'
import ProjectIcon from '../assets/icons/Project.svg'
import StatisticsIcon from '../assets/icons/Statistics.svg'
function AdminNavBar() {
    const location = useLocation()
  return (
    <aside className='aside-navbar'>
        <nav>
            <label className='p-2 lg:block hidden text-xl font-bold'>Impact <br/> Admin</label>
            <ul>
                
                <NavLink to="/adminDashboard">
                    <li className={location.pathname==="/adminDashboard"? 'active-hover': ""}><img src={DashboardIcon} alt="dashboard Icon" /></li>
                </NavLink>
                <NavLink to="/adminProject">
                    <li className={location.pathname==="/adminProject"? 'active-hover': ""}><img src={ProjectIcon} alt="dashboard Icon" /></li>
                </NavLink>
                <NavLink to="/adminStatistics">
                    <li className={location.pathname==="/adminStatistics"? 'active-hover': ""}><img src={StatisticsIcon} alt="dashboard Icon" /></li>
                </NavLink>
            </ul>
            <div className='lg:bg-sky-blue rounded-full p-1'>
            <Link to ="/adminAccount" >
                <img src={AccountIcon} alt="" className='lg:size-10 size-8 ' />
            </Link>
            </div>
        </nav>
    </aside>
  )
}

export default AdminNavBar
