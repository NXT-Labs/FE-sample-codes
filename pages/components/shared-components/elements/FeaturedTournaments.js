import Image from 'next/image'

const FeaturedTournaments = () => {
  return (
    <>
      <h2 className="featured-heading">
        <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/trophie-icon.png" alt="trophie icon" width={'28px'} height={'28px'} />
        Featured Tournaments
      </h2>
      <div className="featured-section">
        {/* Tournament Box */}
        <div className="featured-tournament">
          <div className="price--badge">
            <span>
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/eth-icon.svg"
                alt="featured tournament image"
                width={'14px'}
                height={'22px'}
              />
              95
            </span>
            <>PRICE</>
          </div>
          <div>
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/featured-project-1.png"
              className="tournament--image"
              alt="featured tournament image"
              layout='responsive'
              width={'440px'}
              height={'444px'}
            />
          </div>

          <div className="featured--content">
            <h3>COD:W 2v2 - You Take The POint</h3>
            <ul className="slots--info">
              <li>Free to enter</li>
              <li>2v2</li>
              <li>19/32 slots</li>
            </ul>
            <ul className="time--info">
              <li>
                <span>08/09/2022 </span> <span>6:00 PM</span>
              </li>
              <li>USA</li>
            </ul>
            <button className="green-link">
              VIEW <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/right-arrow.svg" alt="" layout='fixed' width={'18px'} height={'8px'} />
            </button>
          </div>
        </div>

        {/* Tournament Box */}
        <div className="featured-tournament">
          <div className="price--badge">
            <span>
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/eth-icon.svg"
                alt="featured tournament image"
                width={'14px'}
                height={'22px'}
              />
              95
            </span>
            <>PRICE</>
          </div>
          <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/featured-project-2.png"
            className="tournament--image"
            alt="featured tournament image"
            layout='responsive'
            width={'440px'}
            height={'444px'}
          />
          <div className="featured--content">
            <h3>COD:W 2v2 - You Take The POint</h3>
            <ul className="slots--info">
              <li>Free to enter</li>
              <li>2v2</li>
              <li>19/32 slots</li>
            </ul>
            <ul className="time--info">
              <li>
                <span>08/09/2022 </span> <span>6:00 PM</span>
              </li>
              <li>USA</li>
            </ul>
            <button className="green-link">
              VIEW <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/right-arrow.svg" alt="" layout='fixed' width={'18px'} height={'8px'} />
            </button>
          </div>
        </div>

        {/* Tournament Box */}
        <div className="featured-tournament">
          <div className="price--badge">
            <span>
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/eth-icon.svg"
                alt="featured tournament image"
                width={'14px'}
                height={'22px'}
              />
              95
            </span>
            <>PRICE</>
          </div>
          <Image
            src="https://cyber-battles-dev.s3.amazonaws.com/images/homepage/featured-project-3.png"
            className="tournament--image"
            alt="featured tournament image"
            layout='responsive'
            width={'440px'}
            height={'444px'}
          />
          <div className="featured--content">
            <h3>COD:W 2v2 - You Take The POint</h3>
            <ul className="slots--info">
              <li>Free to enter</li>
              <li>2v2</li>
              <li>19/32 slots</li>
            </ul>
            <ul className="time--info">
              <li>
                <span>08/09/2022 </span> <span>6:00 PM</span>
              </li>
              <li>USA</li>
            </ul>
            <button className="green-link">
              VIEW <Image src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/right-arrow.svg" alt="" layout='fixed' width={'18px'} height={'8px'} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedTournaments
