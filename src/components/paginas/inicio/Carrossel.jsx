import "../../estilo/styleslider.css";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../../assets/item";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 }
];

class Carrossel extends React.Component {
  render() {

    console.log(this.props.statuses)
    return (
      <div>    
          <div className="chamada">
              <h1>Exibindo os 10 resultados mais recentes para #natureza</h1>
          </div>   
          <div className="App">
              
              <Carousel className="sessaoSlider" breakPoints={breakPoints}>
                  {
                    this.props.statuses.map((tweet) => 
                    <Item className="imgUnica">
                      <div className="imgUnica">
                          <img className="imgSingle" src={tweet.user.profile_image_url}/>
                  <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@{tweet.user.screen_name}</p></div>
                      </div>
                    </Item>)
                  }

                  {/* <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img2}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item>
                  <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img3}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item>
                  <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img4}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item>
                  <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img5}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item>
                  <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img6}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item>
                  <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img7}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item>
                  <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img8}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item>
                  <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img9}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item>
                  <Item>
                  <div className="imgUnica">
                      <img className="imgSingle" src={img10}/>
                      <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
                  </div>
                  </Item> */}
              </Carousel>
          </div>
      </div>      
    );
  }
}

export default Carrossel


/*
import './estilo/styleslider.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img10.jpg';
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./item";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 }
];

function App() {
  return (
    <div className="App">
      <Carousel className="sessaoSlider" breakPoints={breakPoints}>
        <Item className="imgUnica">
          <div className="imgUnica">
            <img className="imgSingle" src={img1}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img2}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img3}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img4}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img5}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img6}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img7}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img8}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img9}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
        <Item>
          <div className="imgUnica">
            <img className="imgSingle" src={img10}/>
            <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@twitterusername1</p></div>
          </div>
        </Item>
      </Carousel>
    </div>
  );
}*/