import React from 'react';
import '../tabelabusca.css'

const Paginacao = ({postagensPerPage, totalPosts, paginar}) => {
    const numeroPaginas = [];

    for (let  i = 1; i <= Math.ceil(totalPosts / postagensPerPage); i++) {
        numeroPaginas.push(i); 
    }

    return (
        <nav>
            <ul className='paginacao'>
                {numeroPaginas.map(number => (
                  <li key={number} className=''>
                    <a onClick={() => paginar(number)} href='#' className='linkPagina'>
                       {number}
                    </a>   

                  </li>  
                ))}
            </ul>
        </nav>
        ); 
};

export default Paginacao