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

  getGradientColor = id => {
    switch (id) {
      case 'team1':
        return ['#d91c1f', '#1e293b']
      case 'team2':
        return ['#4f5db0', '#5755a7']

      case 'team3':
        return ['#d91c1f', '#a4261d']
      case 'team4':
        return ['#f7db00', '#ffffff33']
      case 'team5':
        return ['#da237b', ' #ffffff33']
      case 'team6':
        return [' #13418b', '#5755a7']
      case 'team7':
        return ['#f26d22', '#ffffff33']
      case 'team8':
        return ['#5755a7', '#4f5db0']
      default:
        return ['white', 'white']
    }
  }

  renderTeamsMatches = () => {
    const {teamsMatch} = this.state
    const {teamBannerUrl, teamColors} = teamsMatch
    const gradientColors =
      teamColors && teamColors.length ? teamColors.join(', ') : 'white, white'

    const containerStyle = {
      background: `linear-gradient(to right, ${gradientColors})`,
      padding: '20px',
    }
    return (
      <div className="team-color-container" style={containerStyle}>
        <img src={teamBannerUrl} alt={teamBannerUrl} />
      </div>
    )
  }

  render() {
    return this.renderTeamsMatches()
  }
}
export default TeamMatches
