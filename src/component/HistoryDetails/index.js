import './index.css'

const HistoryDetails = props => {
  const {historyItems, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItems

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item-container">
      <div className="time-logo-container">
        <p className="time">{timeAccessed}</p>

        <div className="logo-and-text">
          <img className="logo" alt="domain logo" src={logoUrl} />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>

      <div>
        <button
          data-testid="delete"
          className="del-logo"
          type="button"
          onClick={onDelete}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryDetails
