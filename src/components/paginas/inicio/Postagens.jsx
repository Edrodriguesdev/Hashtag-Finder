
import React from 'react';

class Postagens extends React.Component {
    
    render() {
        console.log(this.props.statuses)
        return (
        <div nameClass="tweetUsuarios">   
            { this.props.statuses.filter((tweet) => {
                    if (tweet.entities && tweet.entities.urls &&  tweet.entities.urls.length > 0 ) {
                        return true;
                    }
                    return false;
                }).map((tweet) =>
                <div class="tweet">
                    <img src={tweet.user.profile_image_url} alt="usuario1"/>
                    <h1>{tweet.user.name}</h1>
                    <h3>@{tweet.user.screen_name}</h3>
                    <p>{tweet.text}</p>
                    <a target="blank" href={tweet.entities.urls[0].url}>Ver mais no Twitter</a>
                </div>
            )}
        </div>      
        );
    }
}
export default Postagens