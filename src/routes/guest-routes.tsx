import React from 'react'
import { Navigate } from 'react-router-dom';

// configs
import { PATH } from '../configs/path';

function GuestRoutes({ children }: React.PropsWithChildren) {
  const isAccessToken = window.localStorage.getItem('access_token');

  if(isAccessToken) {
    return <Navigate to={PATH.ROOT} />
  }

  return (
    <>{children}</>
  )
}

export default GuestRoutes