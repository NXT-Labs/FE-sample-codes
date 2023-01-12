import Image from 'next/image';
function PageLoader(){
  return(
    <div className="page-loader">
      <Image
        src="https://cyber-battles-dev.s3.amazonaws.com/images/CB-Loader.gif"
        alt="page loader"
        width="100px"
        height="100px"
      />
    </div>
  )
}

export default PageLoader;