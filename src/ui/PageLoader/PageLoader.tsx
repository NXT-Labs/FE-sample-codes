import Image from 'next/image';
import { S3_BUCKET_URL } from '../../infrastructure/services/APIConfig';

function PageLoader() {
  return (
    <div className="page-loader">
      <Image
        src={`${S3_BUCKET_URL}/CB-Loader.gif`}
        alt="page loader"
        width="100px"
        height="100px"
      />
    </div>
  )
}

export default PageLoader