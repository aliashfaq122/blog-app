import React from 'react'
import { Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
const user = false

    if (!user) {
   return <Navigate to="/" /> 
    }

    return children
}

    
  


export default ProtectedRoute