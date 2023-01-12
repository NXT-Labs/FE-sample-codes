import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { S3_BUCKET_URL } from '../../../infrastructure/services/APIConfig';
import { PrimaryIconButton } from '../../../ui/buttons/buttons';
import { UserErrorMessage, UserSuccessMessage } from '../../../ui/message/message';
import { uploadAvatar } from '../services/uploadAvatar';

function ProfileSummaryPane(props) {
  const [showErrorMsg, setShowErrorMsg] = useState('')
  const [showSuccessMsg, setShowSuccessMsg] = useState('')
  const [avatar, setAvatar] = useState("")

  useEffect(() => {
    setAvatar(props.userState.user.avatar)
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

  const hiddenFileInput = useRef(null)
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    const MAX_FILE_SIZE = 5120 // 5MB
    const fileSizeKiloBytes = fileUploaded.size / 1024

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setShowErrorMsg("File size is greater than 5mb limit");
      return
    }
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", fileUploaded);
    const response = await uploadAvatar(formData)
    if (props.checkNested(response, ...props.successType)) {
      props.userState.setUser({
        user: {
          ...props.userState?.user,
          avatar: response?.data?.data?.user?.avatar
        }
      })
      setShowSuccessMsg("Avatar updated successfully.")
    }
    else {
      if (props.checkNested(response, ...props.errorType)) {
        setShowErrorMsg(response.data.error.message)
      } else {
        setShowErrorMsg("Something went wrong.")
      }
    }
  };

  return (
    <>
      <div className="profile-summary-pane">
        <div>
          {/* member info box */}
          <div className="member--info">
            <div className="user-profile">
              <Image
                src={avatar ? avatar : `${S3_BUCKET_URL}/generic/user-avatar.svg`}
                alt="user avatar" width={'70px'} height={'70px'}
                className={avatar ? "profile-avatar" : ""}
              />
              <PrimaryIconButton
                className="edit-profile"
                image={`${S3_BUCKET_URL}/generic/edit-icon.svg`}
                imageDim={{
                  width: "12px",
                  height: "12px"
                }}
                alt="edit icon"
                onClick={handleClick}
              />
              {/* Make the file input element invisible */}
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
                accept="image/png, image/jpeg"
              />
            </div>
            <h3>{props.userState.user.userName || ""}</h3>
            <p>Basic Member</p>
            <ul>
              <li>
                <Image
                  src={`${S3_BUCKET_URL}/generic/candle-icon.svg`}
                  alt="icon"
                  width="14pxicon"
                  height="14px"
                />
                {new Date(props.userState.user.dob).toDateString() || "-"}
              </li>
              <li>
                <Image
                  src={`${S3_BUCKET_URL}/generic/map-icon.svg`}
                  alt="icon"
                  width="14pxicon"
                  height="14px"
                />
                Region
              </li>
            </ul>
          </div>

          {/* member ranking box */}
          <div className="member--ranking">
            <ul>
              <li>
                <h4>321,087</h4>
                <p>Rank</p>
              </li>
              <li>
                <h4>0</h4>
                <p>XP Earned</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* member points and profile view */}
          <div className="member--points">
            <div>
              <p>Career Record</p>
              <span className="career-record">0 W  - 0 L</span>
            </div>
            <div>
              <p>Career Winnings</p>
              <span className="career-winning">$</span>
            </div>
            <div>
              <p>Profile Views</p>
              <span className="profile-views">0</span>
            </div>
          </div>
          {/* game ID */}
          <div className="member--game-id">
            <h4>Game ID</h4>
            <PrimaryIconButton
              className='btn-bordered'
              image={`${S3_BUCKET_URL}/generic/edit-icon.svg`}
              imageDim={{
                width: "12px",
                height: "12px"
              }}
              value="Edit"
              alt="edit icon"
            />
          </div>

          {/* see more button / only for mobile and tablets */}
          <button id="see-more">see more</button>
        </div>
      </div>
      {
        showErrorMsg ?
          <UserErrorMessage
            msg={showErrorMsg}
          />
          :
          ''
      }
      {
        showSuccessMsg ?
          <UserSuccessMessage
            msg={showSuccessMsg}
          />
          :
          ''
      }
    </>
  )
}

export default ProfileSummaryPane