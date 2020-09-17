import React from 'react';
import Topo from '../comum/Topo';
import Rodape from '../comum/Rodape';
import SobreProjeto from '../sobre/sobreProjeto';
import QuemSomos from '../sobre/quemSomos';

class Sobre extends React.Component {
    render (){
        return(
        <section>
            <Topo/>
            <SobreProjeto/>
            <QuemSomos/>
            <Rodape/>
        </section>
        )
    }
}
export default Sobre;