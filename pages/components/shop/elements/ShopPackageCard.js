
import Image from 'next/image';
function ShopPackageCard(){
  return(
    <>
    <div className='shop-card'>
      <div className='shop-credit-icon'>
      <Image 
        src="https://cyber-battles-dev.s3.amazonaws.com/images/shop/shop-icon-2.svg" 
        alt= "card logo"
        width="120px" height="120px"
      />
      </div>
      
      <div className='shop-credit shop-package'>
        <p>Change <br></br>Username</p>
        <h3>$5.00</h3>
      </div>

      <button className='btn-bordered'>
        BUY
      </button>
    </div>
    </>
  )
}
export default ShopPackageCard;