import React from 'react';
import Topo from '../comum/Topo';
import Rodape from '../comum/Rodape';
import PlanoDeFundo from '../inicio/PlanoDeFundo';
import BarraDePesquisa from '../inicio/BarraDePesquisa';
import MensagemErro from '../inicio/MensagemErro';

import Carrossel from './Carrossel';
import Management from '../inicio/Management';

class Inicio extends React.Component {
    render (){
        return(
        <section>
            <Topo/>
            <PlanoDeFundo/>
            <BarraDePesquisa/>
            <Carrossel/>
            <Management/>
            <MensagemErro/>
            <Rodape/>
        </section>
        )
    }
}
export default Inicio;
