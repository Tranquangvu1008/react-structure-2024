import React from 'react'
import { Navigate } from 'react-router-dom';

// configs
import { PATH } from '../configs/path';

function AuthRoutes({ children }: React.PropsWithChildren) {
  const isAccessToken = window.localStorage.getItem('access_token');

  if(!isAccessToken) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <>{children}</>
  )
}

export default AuthRoutes