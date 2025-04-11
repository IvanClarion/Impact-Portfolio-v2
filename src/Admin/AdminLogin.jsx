import React from 'react'
import {auth} from '../Config/firebase'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate('');

  const handleLogin = async(e)=>{
    e.preventDefault();{
    }try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/adminDashboard')
    }catch(error){
      setError("Wrong Email or Password")
    }
  }
  return (
    
    <section className='main-login'>
      <div className='login-container'>
      <span className='shape'>
        <article className='flex flex-col'>
        <label className='lg:text-4xl text-2xl'>Impact Project</label>
        <label className='lg:text-3xl text-xl'>Admin</label>
        </article>
      </span>
      
      <form className='login-form' onSubmit={handleLogin} >
        <fieldset>
          <legend className='mx-2 my-0 text-xs'>Email or Username</legend>
          <input type='text' name='username' required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend className='mx-2 my-0 text-xs'>Password</legend>
          <input type='password' name='password' required 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </fieldset>
        {error && <p className='text-red-400'>{error}</p>}
        <button>Login</button>
      </form>
      </div>
    </section>
    
  )
}

export default AdminLogin
