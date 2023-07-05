import './index.css'

const GoogleItem = props => {
  const {searchDetails, deleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const onDelete = () => {
    deleteSearch(id)
  }

  return (
    <li className="user-card-container">
      <div>
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button className="delete-button" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default GoogleItem
