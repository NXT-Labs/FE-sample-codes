import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { PrimaryButton } from '../../ui/buttons/buttons'
import { FormInput } from '../../ui/inputs/inputs'
import { Label } from '../../ui/label/Label'
import { resetPayload } from './model/authModel'
import styles from './styles.module.scss'
import _ from 'lodash'
import Router from 'next/router'
import { resetPassword } from './services/resetPassword'
import { handleAuthEnterKeyPress } from './utility/handleKeyPress'

function ResetCredentials(props: resetPayload) {
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState('')

  useEffect(() => {
    // clear error msg on retyping.
    if (newPassword) {
      setShowErrorMsg('')
    }
  }, [newPassword])

  const handleReset = async () => {
    if (
      _.isEmpty(newPassword) ||
      _.isEmpty(confirmNewPassword)
    ) {
      setShowErrorMsg("All fields are required.")
    }
    else if (newPassword !== confirmNewPassword) {
      setShowErrorMsg("Passwords do not match.")
    }
    else {
      // handle on login click
      const payload = {
        password: newPassword
      }
      let userId: string | number = '', verificationToken: string | number = '';
      if (props.resetParams) {
        userId = props.resetParams?.userId || '';
        verificationToken = props.resetParams?.resetToken || '';
      }
      const user = await resetPassword(payload, userId, verificationToken)
      // check if user email is sent successfully
      if (props.checkNested(user, ...props.successType)) {
        // verify if post email sent route props is passed
        if (props.resetRoute) {
          // if yes : redirect to that route
          Router.push(props.resetRoute)
        }
      }// if no : show error msg 
      else {
        if (props.checkNested(user, ...props.errorType)) {
          setShowErrorMsg(user.data.error.message)
        } else {
          setShowErrorMsg("Account does not exist.")
        }
      }
    }
  }


  return (
    <div className="auth-template">
      <div className="auth-left">
        <div className="banner login">
          <div className="logo">
            <Image src="/images/auth-pages/logo.png" alt="cyber battles logo" width={'277px'} height={'87px'} />
          </div>
        </div>
      </div>
      <div className="auth-right">
        <h1 className="main--heading">Reset Passowrd</h1>
        <form className="my-5">
          <FormInput
            showLabel={true}
            type="password"
            label="Password"
            name="password"
            id="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onKeyDown={(e) => handleAuthEnterKeyPress(e, handleReset)}
          />

          <FormInput
            showLabel={true}
            type="password"
            label="Confirm Password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm your new password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            onKeyDown={(e) => handleAuthEnterKeyPress(e, handleReset)}
          />
          {
            showErrorMsg ?
              <Label
                className={
                  styles.error_msg
                }
                value={showErrorMsg} />
              :
              ''
          }
        </form>
        <PrimaryButton
          onClick={() => handleReset()}
          value="Reset"
          className={"btn-solid wide"}
        />
      </div>
    </div>
  )
}

export default ResetCredentials