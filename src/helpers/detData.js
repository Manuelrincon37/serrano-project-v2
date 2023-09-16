import teams from '../data/teams.json'

// filter teams by division and sort
export const firstDivTeams = teams.filter(team => team.division === '1era')
  .sort((a, b) => b.puntos - a.puntos)
export const scdDivTeams = teams.filter(team => team.division === '2da')
  .sort((a, b) => b.puntos - a.puntos)

// determine the position of each team by points
firstDivTeams.forEach((team, index) => {
  if (index === 0) {
    team.posicion = 1
  } else {
    if (team.puntos === firstDivTeams[index - 1].puntos &&
     team.diferencia_de_goles === firstDivTeams[index - 1].diferencia_de_goles) {
      team.posicion = firstDivTeams[index - 1].posicion
    } else {
      team.posicion = index + 1
    }
  }
})
scdDivTeams.forEach((team, index) => {
  if (index === 0) {
    team.posicion = 1
  } else {
    if (team.puntos === scdDivTeams[index - 1].puntos &&
     team.diferencia_de_goles === scdDivTeams[index - 1].diferencia_de_goles) {
      team.posicion = scdDivTeams[index - 1].posicion
    } else {
      team.posicion = index + 1
    }
  }
})
