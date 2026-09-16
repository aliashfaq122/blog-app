import React from 'react'
import { Navigate} from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { radioClasses } from '@mui/material';

const ProtectedRoute = ( {children} ) => {
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    return <Navigate to="/" /> 

  }
});

 return children
    
}

    
  


export default ProtectedRoute