import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import firebase from './components/FirebaseDatabase'
import incomeData from './Data' // Demo

class Main extends Component {

  constructor (props) {
    super(props)
    this.state = {lat: '', long: ''}
  }

  componentDidMount () {
    if (!this._findLatLong(incomeData)) { // Create data

    }
  }

  _findLatLong = (data) => { // Find lat long before data binding
    return !!(data.latitude && data.longitude)
  }

  _submit = () => {
    const {lat, long} = this.state
    const obj = {latitude: lat, longitude: long}
    const result = {...Data, ...obj}
    console.log(result)
  }

  render () {
    return (
      <div>
        <input type="text" onChange={(e) => this.setState({lat: e.target.value})} placeholder='lat'/>
        <input type="text" onChange={(e) => this.setState({long: e.target.value})} placeholder='long'/>
        <button type='button' onClick={this._submit}>Save</button>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'))
