
import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { auth } from '../Config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
function AdminSecure() {
    const [userLogin, loading] = useAuthState(auth);
    if (loading){
        return <div className='h-screen w-full items-center flex flex-col justify-center'><div className='loader'></div>Please Wait</div>
    }
  return userLogin? <Outlet/> : <Navigate to="/loginAdmin" replace />;
}

export default AdminSecure