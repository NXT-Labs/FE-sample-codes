import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PrimaryButton } from '../../../ui/buttons/buttons';
import { FormInput, SelectInput } from '../../../ui/inputs/inputs';
import { Label } from '../../../ui/label/Label';
import { updateInfo } from '../services/updateInfo';
import { updatePassword } from '../services/updatePassword';
import { updatePhone } from '../services/updatePhone';
import { updateTimezone } from '../services/updateTimezone';
import { handleAuthEnterKeyPress } from '../utility/handleKeyPress';
import { validateEmail } from '../utility/validateEmail';

function PreferenceSettings(props) {
  const [accountInfo, setAccountInfo] = useState({
    userName: props.userState?.user?.userName || '',
    email: props.userState?.user?.email || ''
  })
  const [phoneNumber, setPhoneNumber] = useState(props.userState?.user?.phone || '')
  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  })
  const [location, setLocation] = useState({
    timezone: props.userState?.user?.timezone || '',
    region: props.userState?.user?.region || ''
  })
  const [security, setSecurity] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState('')
  const [showSuccessMsg, setShowSuccessMsg] = useState('')
  const [tempDisable, setTempDisable] = useState(false)

  useEffect(() => {
    resetMessages()
  }, [showErrorMsg, showSuccessMsg])

  const resetMessages = () => {
    if (showErrorMsg) {
      setTimeout(() => {
        setShowErrorMsg('')
      }, 5000);
    }
    if (showSuccessMsg) {
      setTimeout(() => {
        setShowSuccessMsg('')
      }, 5000);
    }
  }

  const handleUpdatePassowrd = async (e) => {
    setTempDisable(true)
    e?.preventDefault()
    if (!changePassword.currentPassword || !changePassword.newPassword || !changePassword.confirmNewPassword) {
      setShowErrorMsg("All 3 fields of password are required.")
      setTempDisable(false)
      return
    }
    if (changePassword.newPassword !== changePassword.confirmNewPassword) {
      setShowErrorMsg("New password and confirm password do not match.")
      setTempDisable(false)
      return
    }
    if (changePassword.newPassword === changePassword.currentPassword) {
      setShowErrorMsg("New password and current password can not be same.")
      setTempDisable(false)
      return
    }
    const data = {
      password: changePassword.currentPassword,
      newPassword: changePassword.newPassword
    }

    const changedPassword = await updatePassword(data)
    if (props.checkNested(changedPassword, ...props.successType)) {
      setChangePassword({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      })
      setShowSuccessMsg("Password updated successfully.Please login again.")
      setTimeout(async () => {
        await props.userSignoutWithoutSession(props.userState.setUser({
          user: false
        }))
      }, 3000);
    }
    else {
      if (props.checkNested(changedPassword, ...props.errorType)) {
        setShowErrorMsg(changedPassword.data.error.message)
      } else {
        setShowErrorMsg("Invalid password. Password must have min length of 6.")
      }
      setTempDisable(false)
    }
  }

  const handleUpdatePhone = async (e) => {
    e?.preventDefault()
    if (!phoneNumber) {
      setShowErrorMsg("Phone number can not be null.")
      return
    }
    const data = { phoneNumber }
    const changedPhoneNumber = await updatePhone(data)
    if (props.checkNested(changedPhoneNumber, ...props.successType)) {
      if (props.userState.setUser) {
        props.userState.setUser({
          user: {
            ...props.userState?.user,
            phone: changedPhoneNumber?.data?.data?.user?.phone
          }
        })
        setShowSuccessMsg("Phone number updated successfully.")
      }
    }
    else {
      if (props.checkNested(changedPhoneNumber, ...props.errorType)) {
        setShowErrorMsg(changedPhoneNumber.data.error.message)
      } else {
        setShowErrorMsg("Something went wrong.")
      }
    }
  }

  const handleUpdateLocation = async (e) => {
    e?.preventDefault()
    const data = {
      timezone: location.timezone
    }
    const updatedLocation = await updateTimezone(data)
    if (props.checkNested(updatedLocation, ...props.successType)) {
      if (props.userState.setUser) {
        props.userState.setUser({
          user: {
            ...props.userState?.user,
            timezone: updatedLocation?.data?.data?.user?.timezone,
          }
        })
        setShowSuccessMsg("Location updated successfully.")
      }
    }
    else {
      if (props.checkNested(updatedLocation, ...props.errorType)) {
        setShowErrorMsg(updatedLocation.data.error.message)
      } else {
        setShowErrorMsg("Something went wrong.")
      }
    }
  }

  const handleUpdateInfo = async (e) => {
    setTempDisable(true)
    e?.preventDefault()
    if (!accountInfo.email || !accountInfo.userName) {
      setShowErrorMsg("Email and username can not be null.")
      setTempDisable(false)
      return
    }
    if (!validateEmail(accountInfo.email)) {
      setShowErrorMsg("Invalid Email.")
      setTempDisable(false)
      return
    }
    const data = {
      email: accountInfo.email,
      userName: accountInfo.userName
    }
    const userInfo = await updateInfo(data)
    if (props.checkNested(userInfo, ...props.successType)) {
      if (props.userState.setUser) {
        props.userState.setUser({
          user: {
            ...props.userState?.user,
            email: userInfo?.data?.data?.user?.email,
            userName: userInfo?.data?.data?.user?.userName,
          }
        })
        setShowSuccessMsg("User info updated successfully.Please login again.")
        setTimeout(async () => {
          await props.userSignoutWithoutSession(props.userState.setUser({
            user: false
          }))
        }, 3000);
      }
    }
    else {
      if (props.checkNested(userInfo, ...props.errorType)) {
        setShowErrorMsg(userInfo.data.error.message)
      } else {
        setShowErrorMsg("Something went wrong.")
      }
      setTempDisable(false)
    }
  }

  return (
    <>
      <div className="filters-row">
        <SelectInput
          options={[{
            label: 'Set Alerts',
            value: ''
          }, {
            label: 'Hourly',
            value: 'hourly'
          }, {
            label: 'Daily',
            value: 'daily'
          }, {
            label: 'Weekly',
            value: 'weekly'
          }]}
          onChange={() => console.log("")}
        />
      </div>
      <div className="settings">
        <form className="settings-form">
          {/* AACCOUNT INFO */}
          <div className="setting-title">
            <h3>Account Info</h3>
          </div>
          <div className="form-row">
            <div className="form-field">
              <Label
                htmlFor="userName"
                value="Username" />
              <div className="has-button">
                <FormInput
                  type="text"
                  name="userName"
                  id=""
                  placeholder="Moiz Muhammad"
                  value={accountInfo.userName}
                  onChange={(e) => setAccountInfo({ ...accountInfo, userName: e.target.value })}
                  disabled={tempDisable}
                />
                {/* <PrimaryIconButton
                  className="setting-button"
                  image="https://cyber-battles-dev.s3.amazonaws.com/images/generic/gear-icon.svg"
                  imageDim={{
                    width: "24px",
                    height: "24px"
                  }}
                  alt="gear"
                /> */}
              </div>
            </div>
            <div className="form-field">
              <Label
                htmlFor="userEmail"
                value="Email" />
              <div className="has-button">
                <FormInput
                  type="text"
                  name="userEmail"
                  id=""
                  placeholder="moiz@nxtdevs.com"
                  value={accountInfo.email}
                  onChange={(e) => setAccountInfo({ ...accountInfo, email: e.target.value })}
                  disabled={tempDisable}
                />
                {/* <PrimaryIconButton
                  className="setting-button"
                  image="https://cyber-battles-dev.s3.amazonaws.com/images/generic/gear-icon.svg"
                  imageDim={{
                    width: "24px",
                    height: "24px"
                  }}
                  alt="gear"
                /> */}
              </div>
            </div>
            <PrimaryButton
              className="btn-bordered"
              value="Change Info"
              onClick={handleUpdateInfo}
            />
          </div>
          <p className="form-note">
            <span className="info-icon">
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/info-icon-grey.svg"
                alt="info"
                width="16px"
                height="16px"
                layout="fixed"
              />
            </span>
            Name change package is required to edit. If you do not have one in your inventory, you will be prompted to purchase one before continuing.
          </p>
          <div className="form-row">
            <div className="form-field">
              <Label
                htmlFor="phone"
                value="Phone Number" />
              <FormInput
                type="number"
                name="phone"
                id=""
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleUpdatePhone)}
              />
            </div>
            <PrimaryButton
              className="btn-bordered"
              value="Save Phone"
              onClick={handleUpdatePhone}
            />
          </div>

          {/* CHANGE PASSWORD */}
          <div className="setting-title">
            <h3>Change Password</h3>
          </div>
          <div className="form-row">
            <div className="form-field">
              <Label
                htmlFor="changePasss"
                value="Current Password" />
              <FormInput
                type="password"
                name="changePasss"
                id=""
                placeholder="Current password"
                value={changePassword.currentPassword}
                onChange={(e) => setChangePassword({
                  ...changePassword,
                  currentPassword: e.target.value
                })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleUpdatePassowrd)}
                disabled={tempDisable}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="newPass"
                value="New Password" />
              <FormInput
                type="password"
                name="newPass"
                id=""
                placeholder="New password @M_3d4H2"
                value={changePassword.newPassword}
                onChange={(e) => setChangePassword({
                  ...changePassword,
                  newPassword: e.target.value
                })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleUpdatePassowrd)}
                disabled={tempDisable}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="newPassRe"
                value="Retype Password" />
              <FormInput
                type="password"
                name="newPassRe"
                id=""
                placeholder="retype password @M_3d4H2"
                value={changePassword.confirmNewPassword}
                onChange={(e) => setChangePassword({
                  ...changePassword,
                  confirmNewPassword: e.target.value
                })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleUpdatePassowrd)}
                disabled={tempDisable}
              />
            </div>
            <PrimaryButton
              className="btn-bordered"
              value="Change Password"
              onClick={handleUpdatePassowrd}
            />
          </div>

          {/* LOCATION */}
          <div className="setting-title">
            <h3>Location</h3>
          </div>
          <div className="form-row">
            <div className="">
              <Label
                htmlFor="timeZone"
                value="Time Zone" />
              <SelectInput
                options={props.timezones.length ? props.timezones : []}
                name="timeZone"
                onChange={(e) => setLocation({ ...location, timezone: e.target.value })}
                value={location.timezone}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="region"
                value="Region" />
              <FormInput
                type="text"
                name="region"
                id=""
                placeholder="United States"
                onChange={(e) => setLocation({ ...location, region: e.target.value })}
                value={location.region}
              />
            </div>
            <PrimaryButton
              className="btn-bordered"
              value="Change Timezone"
              onClick={handleUpdateLocation}
            />
          </div>

          {/* SECURITY */}
          <div className="setting-title">
            <h3>Security</h3>
          </div>
          <div className="form-row">
            <div className="form-field disabled">
              <Label
                htmlFor="securityMethod"
                value="Current 2FA Method" />
              <FormInput
                type="text"
                name="securityMethod"
                id=""
                placeholder="Disabled"
                disabled
                onChange={(e) => setSecurity(e.target.value)}
                value={security}
              />
            </div>
            <PrimaryButton
              className="btn-bordered no-pointer-event"
              value="Change"
            />
          </div>
        </form>
      </div >
      {
        showErrorMsg ?
          <Label
            htmlFor="styled-checkbox-1"
            className="error_msg"
            value={showErrorMsg} />
          :
          ''
      }
      {
        showSuccessMsg ?
          <Label
            htmlFor="styled-checkbox-1"
            className="success_msg"
            value={showSuccessMsg} />
          :
          ''
      }
    </>
  )
}

export default PreferenceSettings