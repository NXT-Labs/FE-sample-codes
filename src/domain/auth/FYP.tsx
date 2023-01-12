import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../../ui/buttons/buttons";
import { FormInput } from "../../ui/inputs/inputs";
import { Label } from "../../ui/label/Label";
import styles from './styles.module.scss'
import _ from 'lodash'
import { fypPayload } from "./model/authModel";
import { forgotYourPassword } from "./services/forgotYourPassword";
import { S3_BUCKET_URL } from "../../infrastructure/services/APIConfig";
import { handleAuthEnterKeyPress } from "./utility/handleKeyPress";

function FYP(props: fypPayload) {
  const [userName, setUserName] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState('')
  const [showSuccessMsg, setShowSuccessMsg] = useState('')

  useEffect(() => {
    // clear error msg on retyping.
    if (userName) {
      setShowErrorMsg('')
      setShowSuccessMsg('')
    }
  }, [userName])

  const handleFyp = async () => {
    if (
      _.isEmpty(userName)
    ) {
      setShowErrorMsg("All fields are required.")
    }
    else {
      // handle on login click
      const payload = {
        userName
      }

      const user = await forgotYourPassword(payload)
      // check if user email is sent successfully
      // TODO: we'll add success/failure check in infrastructure once it's finalized.
      if (props.checkNested(user, ...props.successType)) {
        setShowSuccessMsg(props.successMsg || "Reset link has been sent on the email.")
        setUserName("")
      }// if no : show error msg 
      else {
        if (props.checkNested(user, ...props.errorType)) {
          setShowErrorMsg(user.data.error.message)
        } else {
          setShowErrorMsg(props.AccountDoesNotExistMsg || "Account does not exist.")
        }
      }
    }
  }
  return (
    <>
      <div className="auth-template">
        <div className="auth-left">
          <div className="banner login">
            <div className="logo">
              <Image src={`${S3_BUCKET_URL}/logos/logo.webp`} alt="cyber battles logo" width={'277px'} height={'87px'} />
            </div>
          </div>
        </div>
        <div className="auth-right">
          <h1 className="main--heading">Forgot Password</h1>
          <p>Enter the email to recover the password</p>
          <form className="recovery--form">
            <FormInput
              showLabel={true}
              type="text"
              label="Email or Username"
              name="username"
              id="userName"
              placeholder="Enter your name or email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={(e) => handleAuthEnterKeyPress(e, handleFyp)}
            />
            {
              showErrorMsg ?
                <Label
                  className={
                    styles.error_msg
                  }
                  value={showErrorMsg} />
                :
                showSuccessMsg ?
                  <Label
                    className={
                      styles.success_msg
                    }
                    value={showSuccessMsg} />
                  :
                  ''
            }
          </form>
          <Link href={props.signinRoute || "/Signin"}>
            <a className="blue--link">Back to Login</a>
          </Link>
          <PrimaryButton
            onClick={handleFyp}
            className="btn-solid wide"
            value="Send"
          />
        </div>
      </div>

    </>

  )
}

export default FYP