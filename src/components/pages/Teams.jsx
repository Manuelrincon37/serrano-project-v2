// team pages will be here
import teams from '../../data/teams.json'

export const Teams = () => {
  return (
    <>
    <div className="teams-container">
        {teams.map((team) => {
          return (
                <div key= {team.id} className="team-card">
                    <img className="team-logo" src={team.escudo} alt="escudo" />
                    <h2>{team.nombre}</h2>
                    <p> Presindente: {team.coach}</p>
                </div>
          )
        })}

    </div>
    </>
  )
}
