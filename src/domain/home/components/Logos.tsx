import Image from 'next/image'

function Logos() {
  return (
    <div className=" game-logos">
    <Image
      src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/logo-warzone.png"
      alt="gaming brand logo"
      width={'123px'}
      height={'40px'}
      layout='fixed'
    />
    <Image
      src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/logo-dota2.png"
      alt="gaming brand logo"
      width={'179px'}
      height={'38px'}
      layout='fixed'
    />
    <Image
      src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/logo-valorant.png"
      alt="gaming brand logo"
      width={'165px'}
      height={'23px'}
      layout='fixed'
    />
    <Image
      src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/logo-apex-legends.png"
      alt="gaming brand logo"
      width={'87px'}
      height={'56px'}
      layout='fixed'
    />
    <Image
      src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/logo-over-watch.png"
      alt="gaming brand logo"
      width={'108px'}
      height={'66px'}
      layout='fixed'
    />
  </div>
  )
}

export default Logos