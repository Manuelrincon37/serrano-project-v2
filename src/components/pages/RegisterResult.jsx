// in this component we are going to moidify the result of a match and modifi de teams file
import '../../form.css'
import { MatchResultForm } from '../MatchResultForm'

export const RegisterResult = () => {
  return (
    <div className="container-form">
        <h1>Ingrese resultado</h1>

        <div className='resultForm'>
            <MatchResultForm />
        </div>

    </div>
  )
}
