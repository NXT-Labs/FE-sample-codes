function SimpleTabs(props) {
  return (
    <>
      <div className="simple-tabs">
        <ul className="simple-tabs-list">
          {
            props.tabs.map((tab, idx) => {
              return (
                <li className={`simple-tabs-item ${props.activeTab === idx ? 'active' : ''}`}
                  onClick={tab.onClick}
                  key={idx}
                >
                  {tab.label}
                </li>
              )
            })
          }

          <li className="simple-tabs-item">Cookies</li>
        </ul>
      </div>

      <div className="simple-tab-content">
      </div>
    </>
  )
}

export default SimpleTabs