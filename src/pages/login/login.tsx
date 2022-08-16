import { useEffect, useState } from 'react'
import './styled.scss'
import { useNavigate } from 'react-router-dom'

function Login(){

    const [name,setName] = useState('')
    let navigate = useNavigate()

    function SaveName(){
        localStorage.setItem('nome',name)
        navigate('/home')
    }

    useEffect(()=>{
        const auth = localStorage.getItem('nome')
        if(auth){
        navigate('/home')
        }
    })

    return(
        <div className='main'>
            <div className='form-group' onSubmit={SaveName}>
                <p>Qual é o seu nome ? </p>
                <form className='form'>
                    <input type='text' value={name} onChange={e => setName(e.target.value)}/>
                    <label>* Mínimo de 4 caracteres</label>
                    <button disabled={name.length < 5 ? true : false} type='submit'>Salvar</button>
                </form>
            </div>
        </div>
    )
}

export default Login