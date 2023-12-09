// Write your code here
import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teams: []}

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedTeams = data.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teams: updatedTeams})
  }

  render() {
    const {teams} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
            className="logo-image"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
          <ul>
            {teams.map(item => (
              <li>
                <TeamCard teamData={item} key={item.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
