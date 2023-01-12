import Image from 'next/image'
import { PrimaryIconButton } from '../../../ui/buttons/buttons'


function FeaturedTournament() {
  return (
    <>
      <h2 className="featured-heading">
        <Image src="/images/generic/trophie-icon.svg" alt="trophie icon" width={'28px'} height={'28px'} />
        Featured Tournaments
      </h2>
      <div className="featured-section">
        {/* Tournament Box */}
        <div className="featured-tournament">
          <div className="price--badge">
            <span>
              <Image
                src="/images/generic/eth-icon.svg"
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
              src="/images/home-elements/featured-project-1.png"
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
            <PrimaryIconButton className="green-link"
              value="VIEW"
              image="/images/generic/right-arrow.svg"
              imageDim={{
                width: '18px',
                height: '8px'
              }}
            />
          </div>
        </div>

        {/* Tournament Box */}
        <div className="featured-tournament">
          <div className="price--badge">
            <span>
              <Image
                src="/images/generic/eth-icon.svg"
                alt="featured tournament image"
                width={'14px'}
                height={'22px'}
              />
              95
            </span>
            <>PRICE</>
          </div>
          <Image
            src="/images/home-elements/featured-project-2.png"
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
            <PrimaryIconButton className="green-link"
              value="VIEW"
              image="/images/generic/right-arrow.svg"
              imageDim={{
                width: '18px',
                height: '8px'
              }}
            />
          </div>
        </div>

        {/* Tournament Box */}
        <div className="featured-tournament">
          <div className="price--badge">
            <span>
              <Image
                src="/images/generic/eth-icon.svg"
                alt="featured tournament image"
                width={'14px'}
                height={'22px'}
              />
              95
            </span>
            <>PRICE</>
          </div>
          <Image
            src="/images/home-elements/featured-project-3.png"
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
            <PrimaryIconButton className="green-link"
              value="VIEW"
              image="/images/generic/right-arrow.svg"
              imageDim={{
                width: '18px',
                height: '8px'
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedTournament