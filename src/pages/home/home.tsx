import { useState } from 'react'
import List from '../../components/list'
import TopBar from '../../components/topbar'
import './styled.scss'

function Home(){
    const [data,setData] = useState()
    return(
        <div className='main-home'>
            <TopBar/>
            <List/>
            
        </div>
    )
}

export default Home