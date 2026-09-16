import React, { useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';


const Home = () => {
  const [profile,setProfile] = useState(false)
   const auth = getAuth();
useEffect(() => {
    onAuthStateChanged(auth, (user) => {

    if (user) {
       setProfile(true)

    }
  });
},[])





  return (
    <div>
      <Navbar profile = {profile} />
    </div>
  )
}

export default Home