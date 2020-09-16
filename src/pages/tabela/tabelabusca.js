import React, { Component } from 'react'
import Header from '../../componentes/header'
import '../../tabelabusca.css'


class Tabela extends React.Component {
    render() {
      return (
        <div>
        <Header />
          <div className='buscarealizada'>
            <h2 className='logo'>Buscas realizadas</h2>
          </div>
            <div className='tabelabusca'> 
              <table className='espacotabela' id='paginacao' cellSpacing='0'>
                  <thead>
                    <tr>
                        <th className='hash' style={{borderBottomLeftRadius: '10px', borderTopLeftRadius: '10px'}}>Hashtag</th>
                        <th>Data</th>
                        <th className='hash' style={{borderBottomRightRadius: '10px', borderTopRightRadius: '10px'}}>Hora</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr>
                              <td style={{color: 'black'}}>#hashtagname</td>
                              <td>25/02</td>
                              <td>09:30</td>
                          
                      </tr>
                  </tbody>       
              </table> 
            </div> 
        </div>
      );
    }

   /* componentDidMount(){
      console.log('componente carregado!')
      //console.log(this.props.location.search)
      let params = new URLSearchParams(this.props.location.search)
      console.log('Perfil buscado:' + params.get('profile'))
    
      fetch('https://api.airtable.com/v0/appVIbIe3dgo7JRR8/Buscas?' + )
      //https://api.twitter.com/1.1/search/tweets.json?q=
      
    } */
  }
  
  

export default Tabela

