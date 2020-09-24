<<<<<<< HEAD
import React from 'react'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Tabela from './pages/tabela/tabelabusca'


function App() {
    return (
      
    <Router>
        <Switch>
            <Route path="/" component={Tabela} /> 
        </Switch>
    </Router>
    );
}

export default App;
=======
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Inicio from './components/paginas/inicio/inicio';
import Sobre from './components/paginas/sobre/sobre';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sobre" component = {Sobre} />
        <Route path="/" component = {Inicio} />
      </Switch>
    </Router>
  )
}
export default App;
>>>>>>> 15a0d3fc392d0818b872e7d24c4a5504a2d3766d
