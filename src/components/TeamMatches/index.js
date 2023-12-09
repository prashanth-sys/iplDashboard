// Write your code here
import {Component} from 'react'

import './index.css'

class TeamMatches extends Component {
  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>hii</h1>
      </div>
    )
  }
}
export default TeamMatches
