import "../../estilo/styleslider.css";
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
                    this.props.statuses.filter((tweet) => {
                      if (tweet.extended_entities && tweet.extended_entities.media &&  tweet.extended_entities.media.length > 0 ) {
                          return true;
                    }
                    return false;
                  }).map((tweet) => 
                    <Item className="imgUnica">
                      <div className="imgUnica">
                          <img className="imgSingle" src={tweet.extended_entities.media[0].media_url}/>
                  <div className="texto"><p className="nomeUsuario">Postado por:</p><p className="usuarioPost">@{tweet.user.screen_name}</p></div>
                      </div>
                    </Item>)
                  }
              </Carousel>
          </div>
      </div>      
    );
  }
}

export default Carrossel
