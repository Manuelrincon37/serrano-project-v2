import { useState } from 'react'
import teams from '../data/teams.json'

export const MatchResultForm = () => {
  const [formData, setFormData] = useState({
    div: '',
    team1: '',
    team2: '',
    team1Goals: 0,
    team2Goals: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }

  const updateTeamData = () => {
    const updatedTeams = [...teams]

    updatedTeams.forEach((team) => {
      if (team.nombre === formData.team1 && team.nombre !== '') {
        // Actualizar datos del equipo 1
        team.partidos_jugados += 1
        team.goles_a_favor += Number(formData.team1Goals)
        team.goles_en_contra += Number(formData.team2Goals)
        team.diferencia_de_goles = team.goles_a_favor - team.goles_en_contra
        if (formData.team1Goals > formData.team2Goals) {
          team.puntos += 3
          team.partidos_ganados += 1
        } else if (formData.team1Goals === formData.team2Goals) {
          team.puntos += 1
          team.partidos_empatados += 1
        } else {
          team.partidos_perdidos += 1
        }
      }
      if (team.nombre === formData.team2 && team.nombre !== '') {
        // Actualizar datos del equipo 2
        team.partidos_jugados += 1
        team.goles_a_favor += Number(formData.team2Goals)
        team.goles_en_contra += Number(formData.team1Goals)
        team.diferencia_de_goles = team.goles_a_favor - team.goles_en_contra
        if (formData.team2Goals > formData.team1Goals) {
          team.puntos += 3
          team.partidos_ganados += 1
        } else if (formData.team2Goals === formData.team1Goals) {
          team.puntos += 1
          team.partidos_empatados += 1
        } else {
          team.partidos_perdidos += 1
        }
      }
    })
    return updatedTeams
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="formResult">

        <div className='local'>
            <label htmlFor="local">Equipo Local</label>
            <select id="local" name="local" onChange={handleChange}>
             {teams.map((team) => (
                <option key={team.id} value={FormData.team1}>{team.nombre}</option>
             ))}
            </select>
        </div>
        <div className='visit'>
            <label htmlFor="visitante">Equipo Visitante</label>
            <select id="visitante" name="visitante" onChange={handleChange}>
             {teams.map((team) => (
                <option key={team.id} value={FormData.team2}>{team.nombre}</option>
             ))}
            </select>
        </div>

        <div>
          <label htmlFor="team1Goals">Goles equipo 1</label>
          <input
            type="number"
            id="team1Goals"
            name="team1Goals"
            placeholder="Goles equipo 1"
            value={formData.team1Goals}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="team2Goals">Goles equipo 2</label>
          <input
            type="number"
            id="team2Goals"
            name="team2Goals"
            placeholder="Goles equipo 2"
            value={formData.team2Goals}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
