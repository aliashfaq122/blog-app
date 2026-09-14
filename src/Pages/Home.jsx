import React from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   let navigate = useNavigate()

    const handleLogout = async () => {
  try {
    await signOut(auth);
    // Sign-out successful
  } catch (error) {
    console.error("Logout error:", error);
  }
};

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
    <div>Home Page</div>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home