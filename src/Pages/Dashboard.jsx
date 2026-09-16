import React, { useEffect } from 'react'
import { Navbar } from '../Components/Navbar'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
     let navigate = useNavigate()



  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    
    // ...
  } else {
    // User is signed out
    // ...
    navigate("/login")
    
  }
  },[])
});
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Dashboard