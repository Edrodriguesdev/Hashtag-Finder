import React from 'react'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Index from './index'
import Busca from './pages/busca/busca'
import Tabela from './pages/tabela/tabelabusca'


function App() {
    return (
      
    <Router>
        <Switch>
            
            <Route path="/tabela" component={Tabela} /> 
            <Route path="/" component={Busca} /> 
        </Switch>
    </Router>
    );
}

export default App;
