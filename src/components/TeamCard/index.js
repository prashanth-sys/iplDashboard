// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, teamImageUrl, name} = teamData

  return (
    <Link to={`/team-match/${id}`} className="link">
      <div className="teams-list-container">
        <ul className="team-card-container">
          <li>
            <img src={teamImageUrl} alt={name} className="team-logo" />
          </li>
          <li>
            <p className="name">{name}</p>
          </li>
        </ul>
      </div>
    </Link>
  )
}
export default TeamCard
