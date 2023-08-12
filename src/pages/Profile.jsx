import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main'
import Loader from '../components/Loader'
import { Navigate } from 'react-router-dom'

const Profile = () => {
  const {user,loading,isAuthenticated} = useContext(Context)
  const [name, setName]  = useState('')
  const [email, setEmail]  = useState('')
  useEffect(()=>{
    if(isAuthenticated){

      setName(user.name)
      setEmail(user.email)
    }
  },[isAuthenticated])

  if(!isAuthenticated) return <Navigate to={'/login'}  />
  return (
      loading ? <Loader  /> :(
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
      )
    
  )
}

export default Profile