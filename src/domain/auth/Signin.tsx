import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../../ui/buttons/buttons";
import { CheckInput, FormInput } from "../../ui/inputs/inputs";
import { Label } from "../../ui/label/Label";
import { userSignin } from "./services/signin";
import { signinDomainProp } from "./model/authModel"
import styles from './styles.module.scss'
import _ from 'lodash'
import { S3_BUCKET_URL } from "../../infrastructure/services/APIConfig";
import { handleAuthEnterKeyPress } from "./utility/handleKeyPress";

function Signin(props: signinDomainProp) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [agreedCheck, setAgreedCheck] = useState<boolean>(true)
  const [showErrorMsg, setShowErrorMsg] = useState('')

  useEffect(() => {
    // clear error msg on retyping.
    if (userName || password) {
      setShowErrorMsg('')
    }
  }, [userName, password])

  const handleSignin = async () => {
    if (
      _.isEmpty(userName) ||
      _.isEmpty(password)
    ) {
      setShowErrorMsg("All fields are required.")
    }
    else {
      // handle on login click
      const payload = {
        userName,
        password,
        rememberMe: agreedCheck
      }
      const user = await userSignin(payload)
      // check if user is logged in
      // TODO: we'll add success/failure check in infrastructure once it's finalized.

      if (props.checkNested(user, ...props.successType)) {
        // verify if update user state props is passed
        if (props.setUserState) {
          // if yes : set local user state for entire app
          props.setUserState(user.data.data)
        } else {
          alert("User is logged in but update state function is not passed as props.")
        }
      }// if no : show error msg 
      else {
        if (props.checkNested(user, ...props.errorType)) {
          setShowErrorMsg(user.data.error.message)
        } else {
          setShowErrorMsg("Invalid Username or Email.")
        }
      }
    }
  }

  return (
    <div className="auth-template">
      <div className="auth-left">
        <div className="banner login">
          <div className="logo">
            <Image
              src={`${S3_BUCKET_URL}/logos/logo.webp`}
              alt="cyber battles logo" width={'277px'} height={'87px'} />
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
          <FormInput
            showLabel={true}
            type="text"
            label="Email or UserName"
            name="userName"
            id="userName"
            placeholder="Enter your name or email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSignin)}
          />
          <FormInput
            showLabel={true}
            type="password"
            label="Password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSignin)}
          />
          <Link href="ForgotPassword">
            <a className="blue--link">Forgot Password?</a>
          </Link>
          <div className="checkbox--field">
            <CheckInput
              showLabel={false}
              type="checkbox"
              id="styled-checkbox-1"
              name="styled-checkbox-1"
              checked={agreedCheck}
              onChange={() => setAgreedCheck(!agreedCheck)}
            />
            <Label htmlFor="styled-checkbox-1" value="Remember me on this device." />
          </div>
          {
            showErrorMsg ?
              <Label
                htmlFor="styled-checkbox-1"
                className={
                  styles.error_msg
                }
                value={showErrorMsg} />
              :
              ''
          }
        </form>
        <PrimaryButton
          onClick={() => handleSignin()}
          value="Sign In"
          className={"btn-solid wide"}
        />
      </div>
    </div>
  )
}

export default Signin