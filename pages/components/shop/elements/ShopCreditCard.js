
import Image from 'next/image';
function ShopCreditCard(){
  return(
    <>
    <div className='shop-card'>
      <div className='shop-credit-icon'>
      <Image 
        src="https://cyber-battles-dev.s3.amazonaws.com/images/shop/shop-icon-1.svg" 
        alt= "card logo"
        width="120px" height="120px"
      />
      </div>
      <div className='shop-credit'>
        <p>Credits 1</p>
        <h3>$25.99</h3>
      </div>

      <button className='btn-bordered'>
        BUY
      </button>
    </div>
    </>
  )
}
export default ShopCreditCard;