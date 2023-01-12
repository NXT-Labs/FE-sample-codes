import { PrimaryButton } from "../../../ui/buttons/buttons"

function Games() {
  return (
    <div className="account-profile-tab-content">
      <div className="icon-tab--content-title">
        <h3>All Games</h3>
        <PrimaryButton className="btn-solid" value="Stat Reset" />
      </div>
      <div className="icon-tab--content">
        <p>No game palyed yet! and you call yourself as gamer?</p>
      </div>
    </div>
  )
}

export default Games