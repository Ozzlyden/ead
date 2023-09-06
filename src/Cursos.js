import { useState, useEffect } from "react";
import { AiFillVideoCamera } from 'react-icons/ai';
import {db} from "./firebase.js";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useParams,
  } from "react-router-dom";

export default function Cursos (){
    const[cursos, setCursos] = useState([]);

    // Conexap com o BD
    useEffect(() => {
        db.collection('cursos').onSnapshot((snap) =>{
            setCursos(snap.docs);
        })
    }, []);

    // Listando os cursos
    return(
        <div className="cursos">
            <h2>Cursos Disponíveis:</h2>
            {
                cursos?.map(function (val) {
                    return(
                        <div className="curso-single">
                            <p> <AiFillVideoCamera/> <Link to={"/" + val.data().slug}>{val.id}</Link></p>
                            <p>Descrição: {val.data().Descrição}</p>
                        </div>
                    )
                  })
            }
        </div>
    )
  }