import React from 'react'
import logocasa from '../assets/icon-home.svg'
import logosair from '../assets/icon-power-off.svg'
import '../tabelabusca.css'

class Header extends React.Component {
    render() {
      return (
        <div>
            <header>   
                <nav id='menu'>
                    <div className='logo'>
                        <h1 className='logonormal'>hashtag<b>finder</b></h1>
                    </div>
                <ul>
                    <li><a href='#login' className='home'><img src={logocasa} alt='icon-home' /> HOME</a></li>
                    <li><a href='#sair' className='home sair'><img src={logosair} alt='icon-out' /> SAIR</a></li>
                </ul>
                </nav>
            </header>
        </div>
      );
    }
  }

  export default Header