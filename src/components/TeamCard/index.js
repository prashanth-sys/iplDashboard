// Write your code here
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {teamImageUrl, name} = teamData

  return (
    <div>
      <img src={teamImageUrl} alt="shiva paravathi" />
      <h1>{name}</h1>
    </div>
  )
}
export default TeamCard
