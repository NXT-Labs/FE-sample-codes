import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import FormInputs from "../shared-components/inputs/FormInputs";

const Signin = () => {
  const [username, setUsername] = useState('')

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
        <h1 className="main--heading">Forgot Password</h1>
        <p>Enter the email to recover the password</p>
        <form className="recovery--form">
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
        </form>
          <Link href="Signin">
            <a className="blue--link">Back to Login</a>
          </Link>
        <button className="btn-solid wide">Send</button>
      </div>
    </div>
  )
}

export default Signin
