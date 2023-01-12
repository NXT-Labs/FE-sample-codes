import Image from 'next/image';
import { S3_BUCKET_URL } from "../../../../src/infrastructure/services/APIConfig";
function AccountBanner (){
  return(
    <div className="account-banner">
      <div className='account-banner--image'>
      </div>
     
      <button className="btn-bordered">
          <Image
            src={`${S3_BUCKET_URL}/generic/edit-icon.svg`}
            alt="edit icon"
            width="12px"
            height="12px"
            className='button-icon'
          />
        Edit Header
      </button>
    </div>
  )
}

export default AccountBanner;