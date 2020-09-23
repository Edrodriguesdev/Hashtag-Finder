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
