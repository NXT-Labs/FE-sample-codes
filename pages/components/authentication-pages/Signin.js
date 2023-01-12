import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import FormInputs from "../shared-components/inputs/FormInputs";

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="auth-template">
      <div className="auth-left">
        <div className="banner login">
          <div className="logo">
            <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/authentication-pages/logo.png" alt="cyber battles logo" width={'277px'} height={'87px'} />
          </div>
        </div>
      </div>
      <div className="auth-right">
        <h1 className="main--heading">SIGN IN</h1>
        <p>
          Not a member yet?
          <Link href="Signup">
           <a className="blue--link">Join Free</a> 
          </Link>
        </p>
        <form className="my-5">
          <FormInputs 
            showLabel={true}
            type="text"
            label="Email or Username"
            name="username"
            id="userName"
            placeholder="Enter your name or email"
            value={username}
            setValue={setUsername}
          />
          <FormInputs
            showLabel={true}
            type="password"
            label="Password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            setValue={setPassword}
          />
          <Link href="ForgotPassword">
            <a className="blue--link">Forgot Password?</a>
          </Link>
          <div className="checkbox--field">
            <input
              id="styled-checkbox-1"
              type="checkbox"
              value=""
            />
            <label htmlFor="styled-checkbox-1">
              Remember me on this device.
            </label>
          </div>
        </form>
        <button className="btn-solid wide">Sign In</button>
      </div>
    </div>
  )
}

export default Signin
