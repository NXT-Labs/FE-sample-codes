const ConnectionSettings = () =>{
  return (
    <>
      <div className="settings">
        <form className="settings-form">
          {/* GAME ID */}
          <div className="setting-title">
            <h3>Game ID</h3>
          </div>
          <p className="form-note">Each milestone offer mutiple tires to progress through the duration of your careers.</p>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="psnId">PSN ID</label>
              <input type="text" name="psnId" id="" value="Enter ID"/>
            </div>
            <div className="form-field">
              <label htmlFor="xboxId">Xbox Live ID</label>
              <input type="text" name="xboxId" id="" value="Enter ID"/>
            </div>
            <div className="form-field">
              <label htmlFor="displayName">Epic Display Name</label>
              <input type="text" name="displayName" id="" value="Enter ID"/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="pubgId">PUBG ID</label>
              <input type="text" name="pubgId" id="" value="Enter ID"/>
            </div>
            <div className="form-field">
              <label htmlFor="steamId">STEAM 64 ID</label>
              <input type="text" name="steamId" id="" value="Enter ID"/>
            </div>
            <div className="form-field">
              <label htmlFor="displayName">Battle.NET</label>
              <input type="text" name="displayName" id="" value="Enter name"/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="switchCode">Switch Code and Display Name</label>
                <input type="text" name="switchCode" id="" placeholder="Enter Code and name"/>
              </div>
              <div className="form-field">
                <label htmlFor="originId">Origin ID</label>
                <input type="text" name="originId" id="" placeholder="Enter ID"/>
              </div>
              <button className="btn-bordered">Save Changes</button>
            </div>
          </div>

          {/* SOCIAL NETWORKS */}
          <div className="setting-title">
            <h3>Social Networks</h3>
          </div>
          <p className="form-note">Each milestone offer mutiple tires to progress through the duration of your careers.</p>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="twitterName">Twitter</label>
              <input type="text" name="twitterName" id="" value="Account Name"/>
            </div>
            <div className="form-field">
              <label htmlFor="twitchName">Twitch</label>
              <input type="text" name="twitchName" id="" value="Account Name"/>
            </div>
            <div className="form-field">
              <label htmlFor="facebookName">Facebook</label>
              <input type="text" name="facebookName" id="" value="Account Name"/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="youtubeName">Youtube</label>
              <input type="text" name="youtubeName" id="" value="Account Name"/>
            </div>
            <div className="form-field">
              <label htmlFor="instagramName">Instagram</label>
              <input type="text" name="instagramName" id="" value="Account Name"/>
            </div>
            <button className="btn-bordered">Save Changes</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ConnectionSettings;