import React, { useState } from "react";
import { CheckCircleFill, Pencil, XSquareFill } from "react-bootstrap-icons";
import './styled.scss'

function List(){

    const [edit,setEdit] = useState(false)
    const [data,setData] = useState("teste de bagulho loko")
    const [changes,setChanges] = useState("teste de bagulho loko")

    function saveChanges(){
        setData(changes)
        setEdit(false)
        return false;
    }
    function handleKey(e:any){
        if(e.key === 'Enter'){
            setData(changes)
            setEdit(false)
        }
    }


    return(
        <div className="list-main-div">
            <div onKeyDown={e =>handleKey(e)} className="task">     
                {edit ? 
                <div className="edit-div">
                    <input onChange={e => setChanges(e.target.value)} defaultValue={data}/>
                    <label>Aperte enter para salvar</label>
                </div>
                :
                <p onClick={()=>setEdit(true)}>{data}</p>}
    </div>

        <div className="buttons-list">
                <button><p>Feito</p><CheckCircleFill fill="green"/></button>
                <button><p>Apagar</p><XSquareFill fill="red" /></button>
            </div>
        </div>
    )
}

export default List