import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import Cursos from "./Cursos"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:nomeCurso/:nomeModulo/:nomeAula">
            <div className="aulas-video">Mostrar Aula</div>
          </Route>
          <Route path="/:nomeCurso/:nomeModulo">
            <div className="aulas">Listar Aulas</div>
          </Route>
          <Route path="/:nomeCurso">
            <div className="modulos">Listar Módulos</div>
          </Route>
          <Route path="/">
            <Cursos/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
