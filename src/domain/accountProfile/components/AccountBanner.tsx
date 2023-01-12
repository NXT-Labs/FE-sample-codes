import React from 'react'
import { S3_BUCKET_URL } from '../../../infrastructure/services/APIConfig'
import { PrimaryIconButton } from '../../../ui/buttons/buttons'

function AccountBanner() {
  return (
    <div className="account-banner">
      <div className='account-banner--image'>
      </div>

      <PrimaryIconButton
        className='btn-bordered'
        image={`${S3_BUCKET_URL}/generic/edit-icon.svg`}
        imageDim={{
          width: "12px",
          height: "12px"
        }}
        value="Edit Header"
        alt="edit icon"
      />
    </div>
  )
}

export default AccountBanner