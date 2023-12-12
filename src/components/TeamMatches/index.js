// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {teamsMatch: {}, isLoading: true}

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
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competatingTeam: data.latest_match_details.competing_team,
      competatingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
      recentMatches: data.recent_matches,
      recentUmpairs: data.recent_matches.umpires,
      recentResult: data.recent_matches.result,
      recentManOfTheMatch: data.recent_matches.man_of_the_match,
      recentId: data.recent_matches.id,
      recentDate: data.recent_matches.date,
      recentVenue: data.recent_matches.venue,
      recentCompetatingTeam: data.recent_matches.competing_team,
      recentCompetatingTeamLogo: data.recent_matches.competing_team_logo,
      recentFirstIninnigs: data.recent_matches.first_innings,
      recentSecondIninnings: data.recent_matches.second_innings,
      recentMatchStatus: data.recent_matches.match_status,
    }
    this.setState({teamsMatch: updatedTeams, isLoading: false})
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
        <img src={teamsMatch.teamBannerUrl} alt={teamBannerUrl} />
        {teamsMatch.map(item => (
          <LatestMatch matchDetails={item} key={item.id} />
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          this.renderTeamsMatches()
        )}
      </div>
    )
  }
}
export default TeamMatches
