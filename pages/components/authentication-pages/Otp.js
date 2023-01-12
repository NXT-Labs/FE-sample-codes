import Image from "next/image";
import Link from "next/link";
const Otp = () => {
  return (
    <div className="auth-template">
      <div className="auth-left">
        <div className="banner">
          <div className="logo">
            <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/authentication-pages/logo.png" alt="cyber battles logo" width={'277px'} height={'87px'} />
          </div>
        </div>
      </div>
      <div className="auth-right">
        <h1 className="main--heading">OTP Verification</h1>
        <p>Enter the OTP send to </p>
        <span className="emailSentTo">moizmuhammad@n***********</span>
        <form className="recovery--form">
          <div className="otp">
            <input type="number" maxLength={1} name="" id="" />
            <input type="number" maxLength={1} name="" id="" />
            <input type="number" maxLength={1} name="" id="" />
            <input type="number" maxLength={1} name="" id="" />
          </div>
        </form>
        <p>Didn’t recieve the OTP?
          <Link href="/">
            <a className="blue--link--underlined">Resend OTP</a>
          </Link>  
        </p>
          
        <button className="btn-solid wide">Verify</button>
      </div>
    </div>
  )
}

export default Otp
