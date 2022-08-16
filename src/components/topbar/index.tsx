import './styled.scss'

function TopBar(){

    const userName = localStorage.getItem('nome')

    return(
        <div className='topbar-main'>
            <div className='topbar-item'>
                <p>Olá {userName}</p>
            </div>

            <div className='topbar-item'>
                <p>Quantidade de tarefas</p>
                <label>10</label>
            </div>
        </div>
    )
}

export default TopBar