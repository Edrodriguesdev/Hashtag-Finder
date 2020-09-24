import React, { Component } from 'react'
import Axios from 'axios'

export default class Management extends Component {
  state = {
    lista: []    

  }

  // Faz a busca dos dados quando carrega o componente 
  componentDidMount() {
    this.buscaApi()
  }


  buscaApi = async () => {
    const response = await Axios.get(`http://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?count=10&q=covid`, {
      headers: {
        'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX`
      }
    })
    console.log("response  ", response.data.statuses);
    await this.setState({ lista: response.data.statuses })  
  }




  //  Renderiza os itens da lista 
  render() {
    return (

      <div>
        <table>
          <tbody>
            {this.state.lista.map(item => (<>
              <tr>
                <td>
                  {item.text}
                </td>                
              </tr>
            </>
            ))
            }
          </tbody>
        </table>
      </div>
    );
  }

}
