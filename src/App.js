import React, { useState } from "react";
import './App.css';
 import natureimg from './images/nature img.jpg'
 
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';


import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Checkbox,
  Alert,
  Stack,
} from "@mui/material";




const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);


  const isPassword = (password) =>
  /^[A-Z._%+-]+[@,$,%,&,#]+[0-9.-]+/i.test(password);

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);


  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [rememberMe, setRememberMe] = useState();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

 
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  
  const handleEmail = () => {
    console.log(isEmail(emailInput));
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
  };

   
  const handlePassword = () => {
    console.log(isPassword(passwordInput));
    if (!isPassword(passwordInput)) {
      setPasswordError(true);
      return;
    }

     setPasswordError(false);
  };


 
  const handleSubmit = () => {
    setSuccess(null);
    

    
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid(
        ("Password must be Alphanumeric .Please Re-enter ")
      );
      return;
    }
    setFormValid(null);

  
    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("Remember : " + rememberMe);

  
    setSuccess("Form Submitted Successfully");
  };

  return (
  
   <div class="container">

   
      <div class="img">
      <img src={natureimg} alt="" ></img>
      </div> 
        
    <div className="pg">
         <div class="wrapper one">
           <div class="drop-main">
            <div class="w">W</div>
            <div class="e">E</div>
            <div class="l">L</div>
            <div class="t">C</div>
            <div class="o">O</div>
            <div class="m">M</div>
            <div class="q">E</div>
            <div  class="">==</div> 
            <div class="b">B</div>
            <div class="a">A</div>
            <div class="c">C</div>
            <div class="k">K</div>
            <div class="z">!</div>
           </div>
          </div>

          <div id="icon">
            <GoogleIcon/>
             <AppleIcon/>
            <TwitterIcon/>
          </div>
    
   
          <div style={{ marginTop: "70px",marginLeft: "60px",fontXColor:"white"}}>
           <TextField
            label="Email "
           fullWidth
          error={emailError}
          id="standard-basic"
          variant="standard"
          sx={{ width: "100%" }}
          value={emailInput}
          InputProps={{}}
          size="small"
          onBlur={handleEmail}
          onChange={(event) => {
            setEmailInput(event.target.value);
          }}
        />
          </div>
          <div style={{ marginTop: "70px",marginLeft:"60px" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel
            error={passwordError}
            htmlFor="standard-adornment-password"
          >
            Password
          </InputLabel>
          <Input
            error={passwordError}
            onBlur={handlePassword}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
            value={passwordInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            </div>

             <div style={{ fontSize: "15px",marginTop:"40px" ,marginLeft:"60px" }}>
        <Checkbox
          {...label}
          size="small"
          onChange={(event) => setRememberMe(event.target.checked)}
        />
        Remember Me
            </div>

          <div style={{ marginTop: "55px",textAlign:"center" }}>
        <Button
          variant="contained"
          halfWidth
       
          onClick={handleSubmit}
        >
          Sign In
        </Button>
         </div>

     
      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="error" size="small">
            {formValid}
          </Alert>
        </Stack>
      )}

    
      {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success" size="small">
            {success}
          </Alert>
        </Stack>
      )}

          <div style={{ marginTop: "15px", fontSize: "15px",textAlign:"center" }} margin="left">
        <a>Forgot Password</a>
        <br />
        Do you have an account ?{" "}
        <small style={{  color: "black" }}>
          Create Account
        </small>
       </div>
      </div>
  </div>

   
 
   
   
    
    
  );
}