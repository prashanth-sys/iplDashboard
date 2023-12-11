// Write your code here
import {Component} from 'react'

import './index.css'

class TeamMatches extends Component {
  state = {teamsMatch: {}}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedTeams = {
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamsMatch: updatedTeams})
  }

  renderTeamsMatches = () => {
    const {teamsMatch} = this.state
    const {teamBannerUrl} = teamsMatch
    return (
      <div className="team-color-container">
        <img src={teamBannerUrl} alt={teamBannerUrl} />
      </div>
    )
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
