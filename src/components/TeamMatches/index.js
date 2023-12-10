// Write your code here
import {Component} from 'react'

import './index.css'

class TeamMatches extends Component {
  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in//team-match/${id}`)
    const data = await response.json()
    console.log(data)
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
