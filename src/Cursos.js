import { useState, useEffect } from "react";
import {db} from "./firebase.js";

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
            {
                cursos?.map(function (val) {
                    return(
                        <div>
                            <p>{val.id}</p>
                            <p>{val.data().slug}</p>
                        </div>
                    )
                  })
            }
        </div>
    )
  }