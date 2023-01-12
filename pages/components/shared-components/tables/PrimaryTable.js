import Image from 'next/image'

const PrimaryTable = () => {
  return (
    <div className="primary-table">
      <div className="table-flexbox">
        <div className="table-overflowbox">
          <div className="table-contentbox">
            <div className="table-visibility">
              <table>
                <thead>
                  <tr>
                    <th>GAME</th>
                    <th>PLATFORM</th>
                    <th className='th-with-icon'>
                      ENTRY
                      <Image
                        src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/sort-down-icon.svg"
                        alt="sorting"
                        width="13px"
                        height="7px"
                        layout='fixed'
                      />
                    </th>
                    <th>TEAM SIZE</th>
                    <th>COMPETITION</th>
                    <th>SKILL LEVEL</th>
                    <th>SUPPORT</th>
                    <th>STARTING</th>
                    <th>INFO</th>
                    <th colSpan={3}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="table-image">
                        <Image
                          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/table-img.svg"
                          alt="game image"
                          width="46px"
                          height="46px"
                          layout="fixed"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="compact-text">Cross-Platform</div>
                    </td>
                    <td>
                      <div className="entry">
                        <Image
                          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/eth-icon.svg"
                          alt="eth"
                          width="13px"
                          height="22px"
                        />
                        15.00
                      </div>
                    </td>
                    <td>1v1</td>
                    <td>
                      <div className="details">
                        WORLDWIDE | Ship Haus 24/7 Kill Race | Best of 1
                      </div>
                    </td>
                    <td>
                      <div className="compact-text">All Skills</div>
                    </td>
                    <td>
                      <div className="compact-text">Live Support</div>
                    </td>
                    <td>
                      <div className="compact-text">Available now</div>
                    </td>
                    <td>
                      <button className="info">
                        <Image
                          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/info-icon.svg"
                          alt="info"
                          width="22px"
                          height="22px"
                        />
                      </button>
                    </td>
                    <td>
                      <button className="btn-bordered accept-btn">
                        Accept
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-image">
                        <Image
                          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/table-img.svg"
                          alt="game image"
                          width="46px"
                          height="46px"
                          layout="fixed"
                        />
                      </div>
                    </td>
                    <td>
                      <div className="compact-text">Cross-Platform</div>
                    </td>
                    <td>
                      <div className="entry">
                        <Image
                          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/eth-icon.svg"
                          alt="eth"
                          width="13px"
                          height="22px"
                        />
                        15.00
                      </div>
                    </td>
                    <td>1v1</td>
                    <td>
                      <div className="details">
                        WORLDWIDE | Ship Haus 24/7 Kill Race | Best of 1
                      </div>
                    </td>
                    <td>
                      <div className="compact-text">All Skills</div>
                    </td>
                    <td>
                      <div className="compact-text">Live Support</div>
                    </td>
                    <td>
                      <div className="compact-text">Available now</div>
                    </td>
                    <td>
                      <button className="info">
                        <Image
                          src="https://cyber-battles-dev.s3.amazonaws.com/images/generic/info-icon.svg"
                          alt="info"
                          width="22px"
                          height="22px"
                        />
                      </button>
                    </td>
                    <td>
                      <button className="btn-bordered accept-btn">
                        Accept
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimaryTable
