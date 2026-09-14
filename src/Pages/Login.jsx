import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Login = () => {
  let navigate = useNavigate()
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response.user) {
        toast.success("Login successful");
        navigate("/");
      }

    } catch (error) {
      toast.error(error.code);

    }
  };

  const handleGoogleSignup = async () => {
    try {
      let response = await signInWithPopup(auth, provider)
      console.log(response);
      if (response.user) {
        toast.success("Login successful");
        navigate("/");

      }
    } catch (error) {
      console.log(error);

    }

  }

  return (
    <div className="text-center flex justify-center h-screen bg-gray-200">
      <div className="shadow-md w-[350px] h-[400px] mt-[100px] rounded-2xl flex flex-col justify-around p-5 bg-white">

        <div>
          <p className="text-2xl font-bold">Login</p>
        </div>

        <div className="flex flex-col gap-4">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex gap-3 justify-center">
          <Button
            variant="outlined"
            onClick={loginHandler}
          >
            Login
          </Button>

          <Button onClick={handleGoogleSignup} variant="outlined">
            <GoogleIcon />
          </Button>
        </div>

        <div>
          <Link
            to="/register"
            className="relative group cursor-pointer"
          >
            Not a User?

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

export default Login;