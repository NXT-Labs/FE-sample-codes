import { useEffect, useState } from "react"
import { PrimaryButton } from "../../../ui/buttons/buttons"
import { FormInput } from "../../../ui/inputs/inputs"
import { Label } from "../../../ui/label/Label"
import { updateGameIds } from "../services/updateGameIds"
import { updateSocials } from "../services/updateSocials"
import { handleAuthEnterKeyPress } from "../utility/handleKeyPress"

function ConnectionSettings(props) {
  const [gameId, setGameId] = useState({
    psnId: props.userState?.user?.psnId || '',
    xboxLiveId: props.userState?.user?.xboxLiveId || '',
    epicGamesId: props.userState?.user?.epicGamesId || '',
    pubgId: props.userState?.user?.pubgId || '',
    steamId: props.userState?.user?.steamId || '',
    battleNetId: props.userState?.user?.battleNetId || '',
    switchId: props.userState?.user?.switchId || '',
    originId: props.userState?.user?.originId || ''
  })
  const [socialNetworks, setSocialNetworks] = useState({
    twitter: props.userState?.user?.twitter || '',
    twitch: props.userState?.user?.twitch || '',
    facebook: props.userState?.user?.facebook || '',
    youtube: props.userState?.user?.youtube || '',
    instagram: props.userState?.user?.instagram || ''
  })
  const [showErrorMsg, setShowErrorMsg] = useState('')
  const [showSuccessMsg, setShowSuccessMsg] = useState('')

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

  const handleGameId = async (e) => {
    e?.preventDefault()
    const data = gameId
    const updatedGameIds = await updateGameIds(data)
    if (props.checkNested(updatedGameIds, ...props.successType)) {
      if (props.userState.setUser) {
        props.userState.setUser({
          user: { ...props.userState?.user, ...updatedGameIds?.data?.data?.user }
        })
        setShowSuccessMsg("Game ID Updated Successfully.")
      }
    }
    else {
      if (props.checkNested(updatedGameIds, ...props.errorType)) {
        setShowErrorMsg(updatedGameIds.data.error.message)
      } else {
        setShowErrorMsg("Something went wrong.")
      }
    }
  }

  const handleSocials = async (e) => {
    e?.preventDefault()
    const data = socialNetworks
    const updatedSocials = await updateSocials(data)
    if (props.checkNested(updatedSocials, ...props.successType)) {
      if (props.userState.setUser) {
        props.userState.setUser({
          user: { ...props.userState?.user, ...updatedSocials?.data?.data?.user }
        })
        setShowSuccessMsg("Socials Updated Successfully.")
      }
    }
    else {
      if (props.checkNested(updatedSocials, ...props.errorType)) {
        setShowErrorMsg(updatedSocials.data.error.message)
      } else {
        setShowErrorMsg("Something went wrong.")
      }
    }
  }

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
              <Label
                htmlFor="psnId"
                value="PSN ID"
              />
              <FormInput
                type="text"
                name="psnId"
                id=""
                placeholder="Enter ID"
                value={gameId.psnId}
                onChange={(e) => setGameId({ ...gameId, psnId: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleGameId)}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="xboxId"
                value="Xbox Live ID"
              />
              <FormInput
                type="text"
                name="xboxId"
                id=""
                placeholder="Enter ID"
                value={gameId.xboxLiveId}
                onChange={(e) => setGameId({ ...gameId, xboxLiveId: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleGameId)}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="displayName"
                value="pic Display Name"
              />
              <FormInput
                type="text"
                name="displayName"
                id=""
                placeholder="Enter ID"
                value={gameId.epicGamesId}
                onChange={(e) => setGameId({ ...gameId, epicGamesId: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleGameId)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <Label
                htmlFor="pubgId"
                value="PUBG ID"
              />
              <FormInput
                type="text"
                name="pubgId"
                id=""
                placeholder="Enter ID"
                value={gameId.pubgId}
                onChange={(e) => setGameId({ ...gameId, pubgId: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleGameId)}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="steamId"
                value="STEAM 64 ID"
              />
              <FormInput
                type="text"
                name="steamId"
                id=""
                placeholder="Enter ID"
                value={gameId.steamId}
                onChange={(e) => setGameId({ ...gameId, steamId: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleGameId)}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="displayName"
                value="Battle.NET"
              />
              <FormInput
                type="text"
                name="displayName"
                id=""
                placeholder="Enter name"
                value={gameId.battleNetId}
                onChange={(e) => setGameId({ ...gameId, battleNetId: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleGameId)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-row">
              <div className="form-field">
                <Label
                  htmlFor="switchCode"
                  value="Switch Code and Display Name"
                />
                <FormInput
                  type="text"
                  name="switchCode"
                  id=""
                  placeholder="Enter Name"
                  value={gameId.switchId}
                  onChange={(e) => setGameId({ ...gameId, switchId: e.target.value })}
                  onKeyDown={(e) => handleAuthEnterKeyPress(e, handleGameId)}
                />
              </div>
              <div className="form-field">
                <Label
                  htmlFor="originId"
                  value="Origin ID"
                />
                <FormInput
                  type="text"
                  name="originId"
                  id=""
                  placeholder="Enter ID"
                  value={gameId.originId}
                  onChange={(e) => setGameId({ ...gameId, originId: e.target.value })}
                  onKeyDown={(e) => handleAuthEnterKeyPress(e, handleGameId)}
                />
              </div>
              <PrimaryButton
                className="btn-bordered"
                value="Save Changes"
                onClick={handleGameId}
              />
            </div>
          </div>

          {/* SOCIAL NETWORKS */}
          <div className="setting-title">
            <h3>Social Networks</h3>
          </div>
          <p className="form-note">Each milestone offer mutiple tires to progress through the duration of your careers.</p>
          <div className="form-row">
            <div className="form-field">
              <Label
                htmlFor="twitterName"
                value="Twitter"
              />
              <FormInput
                type="text"
                name="twitterName"
                id=""
                placeholder="Account Name"
                value={socialNetworks.twitter}
                onChange={(e) => setSocialNetworks({ ...socialNetworks, twitter: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSocials)}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="twitchName"
                value="Twitch"
              />
              <FormInput
                type="text"
                name="twitchName"
                id=""
                placeholder="Account Name"
                value={socialNetworks.twitch}
                onChange={(e) => setSocialNetworks({ ...socialNetworks, twitch: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSocials)}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="facebookName"
                value="Facebook"
              />
              <FormInput
                type="text"
                name="facebookName"
                id=""
                placeholder="Account Name"
                value={socialNetworks.facebook}
                onChange={(e) => setSocialNetworks({ ...socialNetworks, facebook: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSocials)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <Label
                htmlFor="youtubeName"
                value="Youtube"
              />
              <FormInput
                type="text"
                name="youtubeName"
                id=""
                placeholder="Account Name"
                value={socialNetworks.youtube}
                onChange={(e) => setSocialNetworks({ ...socialNetworks, youtube: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSocials)}
              />
            </div>
            <div className="form-field">
              <Label
                htmlFor="instagramName"
                value="Instagram"
              />
              <FormInput
                type="text"
                name="instagramName"
                id=""
                placeholder="Account Name"
                value={socialNetworks.instagram}
                onChange={(e) => setSocialNetworks({ ...socialNetworks, instagram: e.target.value })}
                onKeyDown={(e) => handleAuthEnterKeyPress(e, handleSocials)}
              />
            </div>
            <PrimaryButton
              className="btn-bordered"
              value="Save Changes"
              onClick={handleSocials}
            />
          </div>
        </form>
      </div>
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

export default ConnectionSettings