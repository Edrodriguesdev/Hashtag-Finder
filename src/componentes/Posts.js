import React from 'react'

const Posts = ({postagens, carregando}) => {
    if(carregando) {
        return <h4>Carregando..</h4>
    }
    
    return (
    <div>

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
                    {postagens.map(item => (
                            <tr key={item.id}>
                                <td style={{color: 'black'}}>{item.fields.Hashtag}</td>
                                
                                <td>{item.fields.Data}</td>
                                <td>{item.fields.Hora}</td>
                            </tr>
                        ))}
                        
                        
                    </tbody>     
                </table> 
            
            </div>
            
        </div>
        )
}

export default Posts