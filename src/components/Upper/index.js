import './index.css'

const History = props => {
  const {historyItems, removeHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItems

  const onDelete = () => {
    removeHistory(id)
  }
  return (
    <li className="list-item">
      <div>
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="middle">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p href={domainUrl} className="link">
          {domainUrl}
        </p>
      </div>
      <button
        className="delete-cont"
        type="button"
        onClick={onDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default History
