import ProfileSummaryPane from "./elements/ProfileSummaryPane";
import AccountBanner from "./elements/AccountBanner";
import AccountProfileTabs from "./elements/AccountProfileTabs";
function AccountProfile() {
  return (
    <>
      <div className="account-profile-template">
        {/* main row */}
        <div className="acc--row">
          {/* col 1 in the main row */}
          <div className="acc--col-1">
            <ProfileSummaryPane />
          </div>

          {/* col 2 in the main row */}
          <div className="acc--col-2">
            {/* inner row inside col 2 */}
            <div className="acc--innerRow">
              {/* col 1 inner row */}
              <div className="acc--innerCol-1">
                <AccountBanner />
              </div>
              {/* col 2 inner row */}
              <div className="acc--innerCol-2">
                <AccountProfileTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default AccountProfile;