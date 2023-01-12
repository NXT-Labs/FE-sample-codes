import SettingsPageTitle from "./elements/SettingsPageTitle";
import SimpleTabs from "../shared-components/elements/SimpleTabs";
import PreferenceSettings from './elements/PreferenceSettings';
// import ConnectionSettings from './elements/ConnectionSettings';

const AccountSettings = () =>{
  return(
    <>
      <SettingsPageTitle/>
      <div className="account-setting-template">
        <SimpleTabs />
        <div className="simple-tab-content">
          <PreferenceSettings/>
           {/* <ConnectionSettings/> */}
        </div>
      </div>
    </>
  )
}

export default AccountSettings;