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

export default function Modulos (){

    const[modulos, setModulos] = useState([]);
    const { nomeCurso } = useParams();

    // Conexap com o BD
    useEffect(() => {


        db.collection('cursos').where("slug", "==", nomeCurso).get()
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.collection('modulos').onSnapshot(querySnapshot2 =>{
                setModulos(querySnapshot2.docs);
            })
        })
    }, []);

    // Listando os Módulos
    return (
        <div className="cursos">
            <h2>Módulos Disponíveis:</h2>

            {modulos?.map(function(val) {
                let url = `/${nomeCurso}/${val.data().slug}`;
                return (
                    <div className="curso-single">
                        <p><AiFillVideoCamera /> <Link to={"/" + {nomeCurso} + "/" + val.data().slug}>{val.data().titulo}</Link></p>
                        <p>Descrição: {val.data().descricao}</p>
                    </div>
                );
            })}
        </div>
    );

  }