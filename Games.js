import React from 'react'
import './Games.css'

function Games({image, title,rank}) {

                return(
                
                <div className="games_card">
                    <div className="game_body_top">
                    <img src={image}></img>
                    </div>
                    <div className="game_body_bottom">
                     <div className="game_title"><h3>{title}</h3></div>
                    <div className="game_rank"><h3>{rank}</h3></div>
                    </div>
                </div>
        
    )
}

export default Games
