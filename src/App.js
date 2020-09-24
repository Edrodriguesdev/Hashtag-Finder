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
        <Route path="/tabela" component={Tabela} /> 
        <Route path="/sobre" component = {Sobre} />
        <Route path="/" component = {Inicio} />
      </Switch>
    </Router>
  )
}
export default App;

