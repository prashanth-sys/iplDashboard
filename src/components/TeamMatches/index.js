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

    try {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      const updatedTeams = {
        teamBannerUrl: data.team_banner_url,
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
        recentMatches: data.recent_matches.map(recentMatch => ({
          recentUmpires: recentMatch.umpires,
          recentResult: recentMatch.result,
          recentManOfTheMatch: recentMatch.man_of_the_match,
          recentId: recentMatch.id,
          recentDate: recentMatch.date,
          recentVenue: recentMatch.venue,
          recentCompetingTeam: recentMatch.competing_team,
          recentCompetingTeamLogo: recentMatch.competing_team_logo,
          recentFirstInnings: recentMatch.first_innings,
          recentSecondInnings: recentMatch.second_innings,
          recentMatchStatus: recentMatch.match_status,
        })),
      }

      this.setState({
        teamsMatch: updatedTeams,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error fetching match details:', error)
      this.setState({
        isLoading: false,
      })
    }
  }

  getGradientColor = id => {
    switch (id) {
      case 'RCB':
        return ['#d91c1f', '#1e293b']
      case 'KKR':
        return ['#4f5db0', '#5755a7']
      case 'KXP':
        return ['#d91c1f', '#a4261d']
      case 'CSK':
        return ['#f7db00', '#ffffff33']
      case 'RR':
        return ['#da237b', ' #ffffff33']
      case 'MI':
        return [' #13418b', '#5755a7']
      case 'SRH':
        return ['#f26d22', '#ffffff33']
      case 'DC':
        return ['#5755a7', '#4f5db0']
      default:
        return ['white', 'white']
    }
  }

  renderTeamsMatches = () => {
    const {teamsMatch} = this.state
    const {teamBannerUrl, recentMatches} = teamsMatch
    const containerStyle = {
      background: `linear-gradient(to right, ${this.getGradientColor(
        teamsMatch.competingTeam,
      ).join(', ')})`,
      padding: '20px',
    }

    return (
      <div className="team-color-container" style={containerStyle}>
        <img src={teamBannerUrl} alt="team banner" />
        {recentMatches.map(item => (
          <LatestMatch matchDetails={item} key={item.recentId} />
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
