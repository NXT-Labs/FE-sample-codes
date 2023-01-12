import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        {/* Top row / 1st row of footer */}
        <div className="footer-row-1">
          {/* left column of first row */}
          <div className="left-col">
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/footer-logo.png"
              alt="cyber battles logo"
              width={'129px'}
              height={'40px'}
              layout="fixed"
            />
            <div className="footer-menu-links">
              <div className="menu-col">
                <ul>
                  <li>
                    <Link href="#">
                      <a>CONTACT US</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>PRIVACY &amp; LEGAL</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-col">
                <ul>
                  <li>
                    <Link href="#">
                      <a>CYBER CONNECT</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>SUPPORT</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-col">
                <ul>
                  <li>
                    <Link href="#">
                      <a>INVESTORS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>PRESS</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-col">
                <ul>
                  <li>
                    <Link href="#">
                      <a>ABOUT US</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>CAREERS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>LOCATIONS</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* right column of first row */}
          <div className="right-col">
            <div className="language-selector">
              <Image
                src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/globe.png"
                alt="globe icon"
                width={'20px'}
                height={'20px'}
              />
              <select className="language-dropdown">
                <option>English</option>
                <option>French</option>
              </select>
            </div>

            {/* ESRB Certificate */}
            <Image
              src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/esrb.png"
              alt="globe icon"
              width={'73px'}
              height={'98px'}
              layout="fixed"
            />
          </div>
        </div>

        {/* Bottom row / 2nd row of footer */}
        <div className="footer-row-2">
          <div className="footer-col col-1">
            <h4>FIND US</h4>
            <ul>
              <li>
                <Link href={''}>
                  <a>
                    <Image
                      src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/opensea-icon.svg"
                      alt="opensea"
                      width={'18px'}
                      height={'18px'}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <a>
                    <Image
                      src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/lookrare-icon.svg"
                      alt="opensea"
                      width={'22px'}
                      height={'18px'}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <a>
                    <Image
                      src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/etherscan-icon.svg"
                      alt="opensea"
                      width={'18px'}
                      height={'18px'}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col col-2">
            <h4>FOLLOW US</h4>
            <ul>
              <li>
                <Link href={''}>
                  <a>
                    <Image
                      src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/discord-icon.svg"
                      alt="opensea"
                      width={'24px'}
                      height={'18px'}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <a>
                    <Image
                      src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/telegram-icon.svg"
                      alt="opensea"
                      width={'21px'}
                      height={'18px'}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <a>
                    <Image
                      src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/instagram-icon.svg"
                      alt="opensea"
                      width={'18px'}
                      height={'18px'}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <a>
                    <Image
                      src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/tiktok-icon.svg"
                      alt="opensea"
                      width={'17px'}
                      height={'18px'}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href={''}>
                  <a>
                    <Image
                      src="https://cyber-battles-dev.s3.amazonaws.com/images/footer/twitter-icon.svg"
                      alt="opensea"
                      width={'22px'}
                      height={'18px'}
                      layout="fixed"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col col-3">
            <ul className="foot-links">
              <li>
                <Link href="#">
                  <a>Interest-Based Ads</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Do Not Sell My Personal Information</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a> Set cookies</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col col-4">
            <p className="copyright">© 2022 Austin Gaming Corp.</p>
            <p className="copyright">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
