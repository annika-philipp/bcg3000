import React from 'react'

const Scoreboard = ({topscores}) => {
    return (
        <div className="container">
            <div className="welcome">
                <h3>Top Scores</h3>
                {topscores.map(score => {
                return [
                   <h3> {score.score} - {score.name} </h3>
                ]
            
                })}
            </div>

        </div>    
    )


}