import { ErrorBoundary } from "react-error-boundary";

import React, { ErrorInfo } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";

function FallbackUI({ resetErrorBoundary }: any) {
  return (
    <Dialog onClose={resetErrorBoundary} fullWidth open>
      <DialogTitle>
        <Typography variant="h4">Error</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Something went wrong!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={resetErrorBoundary} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ErrorBoundaryComponent({ children }: React.PropsWithChildren<{}>) {
  const [boundaryKey, setBoundaryKey] = React.useState(0);  

  function memorizeSyncLog(error: Error, info: ErrorInfo) {
    const errorLog = {
      level: 'error',
      date: new Date().toUTCString(),
      os: navigator.platform,
      user: 'tony@gmail.com',
      error: JSON.stringify(error.message),
      componentStack: JSON.stringify(info),
      location: window.location.href,
    }
    console.log('memorizeSyncLog: ', errorLog); // send log to BE
    window.localStorage.setItem('errorLog', JSON.stringify(errorLog));
  }

  // happy case -> user visit network -> luu log -> send log on BE
  // worst case -> user visit no network -> luu log -> send log on BE
  React.useEffect(() => {
    if(window.navigator.onLine) {
      // if has local storage -> remove log from local storage & send log on BE
    } else {
      // save log to local storage
    }
  },[])
  
  return (
    <ErrorBoundary
      key={boundaryKey}
      onReset={() => setBoundaryKey((prev) => prev + 1)}
      FallbackComponent={FallbackUI}
      onError={memorizeSyncLog}
    >
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryComponent;

