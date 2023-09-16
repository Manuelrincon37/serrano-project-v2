import { ScoreBoard } from '../../components/ScoreBoard'
import { firstDivTeams } from '../../helpers/detData'
export const Index = () => {
  return (

           <div id="container">

                <div className="index">

                    <h1>SITIO EN CONSTRUCCÍON</h1>
                    <p>ROBERTO NO HAGAS TRAMPA</p>

                </div>

                <div className='scoreboard'>
                  <ScoreBoard division={firstDivTeams}/>
                </div>

            </div>

  )
}
