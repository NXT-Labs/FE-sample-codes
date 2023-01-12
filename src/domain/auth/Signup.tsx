import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Label } from '../../ui/label/Label';
import { CheckInput, FormInput, SelectInput } from '../../ui/inputs/inputs';
import { userSignup } from './services/signup';
import { PrimaryButton } from '../../ui/buttons/buttons';
import { signupDomainProp } from './model/authModel';
import styles from './styles.module.scss'
import _ from 'lodash'
import Router from 'next/router'
import { S3_BUCKET_URL } from "../../infrastructure/services/APIConfig";
import { handleAuthEnterKeyPress } from './utility/handleKeyPress';
import { validateEmail } from './utility/validateEmail';

function Signup(props: signupDomainProp) {
  const [userName, setUserName] = useState('')
  const [email, setEamil] = useState('')
  const [password, setPassword] = useState('')
  const [dob, setDob] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [agreedCheck, setAgreedCheck] = useState(true)
  const [showErrorMsg, setShowErrorMsg] = useState('')
  const [maxDate, setMaxDate] = useState('')

  useEffect(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 10);
    setMaxDate(date.toISOString().split('T')[0])
    setDob(date.toISOString().split('T')[0])
    setTimeZone(props.timezones.length ? props.timezones[0]?.value.toString() || '' : '')
  }, [props.timezones.length])


  const handleSignup = async () => {
    if (
      _.isEmpty(userName) ||
      _.isEmpty(email) ||
      _.isEmpty(password) ||
      _.isEmpty(dob) ||
      _.isEmpty(timeZone) ||
      !agreedCheck
    ) {
      setShowErrorMsg("All fields are required.")
    }
    else if (!validateEmail(email)) {
      setShowErrorMsg("Invalid email address.")
    }
    else {// handle on login click
      const payload = {
        userName,
        password,
        email,
        dob,
        timezone: timeZone,
      }
      const user = await userSignup(payload)

      // check if user is logged in
      if (props.checkNested(user, ...props.successType)) {
        // verify if update user state props is passed
        if (props.setUserState) {
          // if yes : set local user state for entire app
          props.setUserState(user.data.data)
        }
        // redirect to signin if exist in props 
        else if (props.redirectTo) {
          Router.push(`${props.redirectTo}`)
        } else {// else show alert to notify developer
          alert("User has successfully signed up but redirection function nor set user state is passed as props.")
        }
      }// if no : show error msg 
      else {
        if (props.checkNested(user, ...props.errorType)) {
          setShowErrorMsg(user.data.error.message)
        } else {
          setShowErrorMsg("Input data is invalid.")
        }
      }

    }
  }

  return (
    <div className="auth-template">
      <div className="auth-left">
        <div className="banner">
          <div className="logo">
            <Image src={`${S3_BUCKET_URL}/logos/logo.webp`} alt="cyber battles logo" width={'277px'} height={'87px'} />
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
          <FormInput
            showLabel={true}
            type="text"
            label="User Name*"
            name="userName"
            id="userName"
            placeholder="enter your userName"
            value={userName}
            onChange={(e) => {
              setShowErrorMsg('')
              setUserName(e.target.value)
            }}
            onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSignup)}
          />

          <FormInput
            showLabel={true}
            type="email"
            label="Email*"
            name="email"
            id="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setShowErrorMsg('')
              setEamil(e.target.value)
            }}
            onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSignup)}
          />

          <FormInput
            showLabel={true}
            type="password"
            label="Create Password*"
            name="password"
            id="password"
            placeholder="Create password @M_3d4H2"
            value={password}
            onChange={(e) => {
              setShowErrorMsg('')
              setPassword(e.target.value)
            }}
            onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSignup)}
          />

          <FormInput
            showLabel={true}
            type="date"
            id="dob"
            name="dob"
            label="Date of Birth*"
            placeholder=" placeholder=DD - MM - YY"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            max={maxDate}
          />
          <SelectInput
            id="timeZone"
            showLabel={true}
            label="Time Zone*"
            options={props.timezones.length ? props.timezones : []}
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
          />

          <div className="checkbox--field">
            <CheckInput
              showLabel={false}
              type="checkbox"
              id="styled-checkbox-1"
              name="styled-checkbox-1"
              checked={agreedCheck}
              onChange={() => setAgreedCheck(!agreedCheck)}
            />
            <Label htmlFor="styled-checkbox-1" value="You are agree" />

            <Link href="/">
              <Label className="blue--link--underlined cursor-pointer" htmlFor="styled-checkbox-1" value="Term &amp; Conditions." />
            </Link>
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
          onClick={() => handleSignup()}
          value="Sign Up"
          className={"btn-solid wide"}
        />
      </div>
    </div>
  )
}

export default Signup