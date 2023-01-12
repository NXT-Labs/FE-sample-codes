import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import FormInputs from "../shared-components/inputs/FormInputs";

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEamil] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="auth-template">
      <div className="auth-left">
        <div className="banner">
          <div className="logo">
            <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/authentication-pages/logo.png" alt="cyber battles logo" width={'277px'} height={'87px'} />
          </div>
        </div>
      </div>
      <div className="auth-right">
        <h1 className="main--heading">STEP UP YOUR GAME JOIN TODAY</h1>
        <p>
          Already a member?
          <Link href="Signin">
           <a className="blue--link">Sign In</a> 
          </Link>
        </p>
        <form className="my-5">
          <FormInputs 
            showLabel={true}
            type="text"
            label="User Name"
            name="username"
            id="userName"
            placeholder="enter your username"
            value={username}
            setValue={setUsername}
          />
          <FormInputs 
            showLabel={true}
            type="email"
            label="Email"
            name="email"
            id="email"
            placeholder="enter your email"
            value={email}
            setValue={setEamil}
          />
          <FormInputs
            showLabel={true}
            type="password"
            label="Create Password"
            name="password"
            id="password"
            placeholder="Create password @M_3d4H2"
            value={password}
            setValue={setPassword}
          />
          <label htmlFor="timeZone">
            Date of Birth
          </label>
          <input type="date" name="dob" id="dob" placeholder="DD - MM - YY"/>
          <label htmlFor="timeZone">
            time zone
          </label>
          <select id="timeZone">
            <option defaultValue="">Select time zone</option>
            <option value="US">(GMT-08:00) Pacific Time</option>
            <option value="CA">(GMT+00:00) London</option>
            <option value="FR">
              (GMT+11:00) Eastern Time - Melbourne, Sydney
            </option>
          </select>
          <div className="checkbox--field">
            <input
              id="styled-checkbox-1"
              type="checkbox"
              value=""
            />
            <label htmlFor="styled-checkbox-1">
              You are agree
              <Link href="/">
               <a className="blue--link--underlined"> Term &amp; Conditions.</a>
              </Link>
            </label>
          </div>
        </form>
        <button className="btn-solid wide">Sign Up</button>
      </div>
    </div>
  )
}

export default Signup
