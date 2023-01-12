import Image from 'next/image'
import { PrimaryButton } from '../../../ui/buttons/buttons'

function Tabs() {
  return (
    <div className="tabs-container">
      <nav className="tabs">
        <button data-target="panel-1" className="tab active">
          What To Do
        </button>
        <button
          data-target="panel-2"
          className="tab"
        >
          What To Play
        </button>
        <button
          data-target="panel-3"
          className="tab"
        >
          Community
        </button>
      </nav>

      <div id="panels">
        <div className="panel-1 tab-content active py-5">
          <div className="tabs-content">
            <div className="left-col">
              <ul>
                <li>
                  <div className="icon">
                    <Image
                      src="/images/generic/document-icon.svg"
                      alt="sign up"
                      width={'32px'}
                      height={'32px'}
                      layout="fixed"
                    />
                  </div>
                  Sign up for free
                </li>
                <li>
                  <div className="icon">
                    <Image
                      src="/images/generic/find-your-game-icon.svg"
                      alt="sign up"
                      width={'32px'}
                      height={'32px'}
                      layout="fixed"
                    />
                  </div>
                  Find Your Game
                </li>
                <li>
                  <div className="icon">
                    <Image
                      src="/images/generic/create-team-icon.svg"
                      alt="sign up"
                      width={'32px'}
                      height={'32px'}
                      layout="fixed"
                    />
                  </div>
                  Create a team, or go solo
                </li>
                <li>
                  <div className="icon">
                    <Image
                      src="/images/generic/play-to-win-icon.svg"
                      alt="sign up"
                      width={'32px'}
                      height={'32px'}
                      layout="fixed"
                    />
                  </div>
                  Play to win cash and bragging rights!
                </li>
              </ul>

              <PrimaryButton
                className="btn-bordered"
                value="Load More"
              />
            </div>
            <div className="right-col">
              <div className="tab-content-image">
                <Image
                  src="/images/generic/tab-content-image.png"
                  alt="content image"
                  width={'429px'}
                  height={'362px'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs