import {Component} from 'react'

import GoogleItem from '../GoogleItem'

import './index.css'

class GooglePage extends Component {
  constructor(props) {
    super(props)
    this.state = {val: props.initialHistoryList, searchInput: ''}
  }

  onChangeSearchInput = event => {
    const {searchInput} = this.state
    const {historyList} = this.props

    const lis = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({
      val: lis,
      searchInput: event.target.value,
    })
  }

  deleteSearch = id => {
    const {val} = this.state
    const filteredData = val.filter(each => each.id !== id)
    this.setState({
      val: filteredData,
    })
  }

  render() {
    const {searchInput, val} = this.state

    return (
      <div className="app-container">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history"
          />
          <div className="search-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              placeholder="Search history"
            />
          </div>
        </nav>
        <div className="bottom">
          {val.length !== 0 ? (
            <ul className="list-container">
              {val.map(each => (
                <GoogleItem
                  searchDetails={each}
                  key={each.id}
                  deleteSearch={this.deleteSearch}
                />
              ))}
            </ul>
          ) : (
            <div>
              <p>There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GooglePage
