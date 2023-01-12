import Image from 'next/image';
const PreferenceSettings = () =>{
  return (
    <>
      <div className="filters-row">
        <select>
            <option>Set Alerts</option>
            <option>Hourly</option>
            <option>Daily</option>
            <option>Weekly</option>
        </select>
      </div>
      <div className="settings">
        <form className="settings-form">
          {/* AACCOUNT INFO */}
          <div className="setting-title">
            <h3>Account Info</h3>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="userName">Username</label>
              <div className="has-button">
                <input type="text" name="userName" id="" placeholder="Moiz Muhammad"/>
                <button className="setting-button">
                  <Image
                    src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/gear-icon.svg"
                    alt="gear"
                    width="24px"
                    height="24px" 
                  />
                </button>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="userEmail">Email</label>
              <div className="has-button">
                <input type="text" name="userEmail" id="" placeholder="moiz@nxtdevs.com"/>
                <button className="setting-button">
                  <Image
                    src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/gear-icon.svg"
                    alt="gear"
                    width="24px"
                    height="24px" 
                  />
                </button>
              </div>
            </div>
          </div>
          <p className="form-note">
            <div className="info-icon">
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/info-icon-grey.svg"
                alt="info"
                width="16px"
                height="16px"
                layout="fixed"
              />
            </div>
            Name change package is required to edit. If you do not have one in your inventory, you will be prompted to purchase one before continuing.
          </p>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" name="phoneNumber" id="" placeholder="Enter your phone number"/>
            </div>
            <button className="btn-bordered">Save Phone</button>
          </div>

          {/* CHANGE PASSWORD */}
          <div className="setting-title">
            <h3>Change Password</h3>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="changePass">Current Password</label>
              <input type="password" name="changePass" id="" placeholder="Current password"/>
            </div>
            <div className="form-field">
              <label htmlFor="newPass">New Password</label>
              <input type="password" name="newPass" id="" placeholder="New password @M_3d4H2"/>
            </div>
            <div className="form-field">
              <label htmlFor="newPass">Retype Password</label>
              <input type="password" name="newPass" id="" placeholder="retype password @M_3d4H2"/>
            </div>
            <button className="btn-bordered">Change Password</button>
          </div>

          {/* LOCATION */}
          <div className="setting-title">
            <h3>Location</h3>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="timeZone">Time Zone</label>
              <select name="timeZone" id="">
                <option value="eastern">2:57 AM  l  Eastern</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="region">Region</label>
              <input type="text" name="region" id="" placeholder="United States"/>
            </div>
            <button className="btn-bordered">Change Timezone</button>
          </div>

           {/* SECURITY */}
           <div className="setting-title">
            <h3>Secutrity</h3>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="securityMethod">Current 2FA Method</label>
              <input className='disabled' type="text" name="securityMethod" id="" placeholder="Disabled" />
            </div>
            <button className="btn-bordered no-pointer-event">Change</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default PreferenceSettings;