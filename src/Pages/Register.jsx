
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import { GoogleAuthProvider ,signInWithPopup } from "firebase/auth";





const Register = () => {
    const provider = new GoogleAuthProvider();
  const [form, setForm] = useState({
    email: "",
    password: "",
    userName: "",
    age: "",
  });

  const handleInputChange = (value, field) => {
    
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignup = async () => {
    console.log("Form Data:", form);
    try {
        let response = await createUserWithEmailAndPassword(auth, form.email, form.password)
        console.log(response);
     
        if (response.user) {
               toast.success("User SignedUp Sucessfully")
        }

    } catch (error) { 
       if (error == "Firebase: Missing password requirements: [Password must contain at least 8 characters, Password must contain a lower case character, Password must contain an upper case character, Password must contain a non-alphanumeric character] (auth/password-does-not-meet-requirements)" || "auth/password-does-not-meet-requirements") {
toast.error("Password must contain at least 8 characters / lower case character / upper case character / special character")
       }else {

       }
        
    }
  };

  const handleGoogleSignup  = async () => {
    try {
        let response = await signInWithPopup(auth, provider)
        console.log(response);
         if (response.user) {
               toast.success("User SignedUp Sucessfully")
        }
    } catch (error) {
        
    }
    
  }

  return (
    <div className="text-center flex justify-center h-screen bg-gray-200">
      <div className="shadow-md w-[350px] h-[450px] mt-[50px] rounded-2xl flex flex-col justify-around p-5 bg-white">

        {/* Heading */}
        <div>
          <p className="text-2xl font-bold">Register</p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3">

          {/* Username */}
          <TextField
            onChange={(e) =>
              handleInputChange(e.target.value, "userName")
            }
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            value={form.userName}
          />

          {/* Age */}
          <TextField
            onChange={(e) =>
              handleInputChange(e.target.value, "age")
            }
            id="age"
            label="Age"
            variant="outlined"
            fullWidth
            type="number"
            value={form.age}
          />

          {/* Email */}
          <TextField
            onChange={(e) =>
              handleInputChange(e.target.value, "email")
            }
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={form.email}
          />

          {/* Password */}
          <TextField
            onChange={(e) =>
              handleInputChange(e.target.value, "password")
            }
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={form.password}
          />

        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">

          <Button
            variant="outlined"
            onClick={handleSignup}
          >
            Signup
          </Button>

          <Button onClick={handleGoogleSignup} variant="outlined">
            <GoogleIcon />
          </Button>

        </div>

        {/* Login Link */}
        <div>
          <Link
            to="/login"
            className="relative group cursor-pointer"
          >
            Already a User?

            <span
              className="absolute left-1/2 -bottom-1 h-[2px] w-0 
              bg-black -translate-x-1/2 
              transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
        </div>

      </div>
       <ToastContainer />
    </div>
    
  );
};

export default Register;
