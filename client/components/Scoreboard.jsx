import React from 'react'

const Scoreboard = ({topScores}) => {
    return (
        <div>
            <div className="scoreboard">
                <h3>Top Scores</h3>
                <div className="topscores">
                {topScores.map(score => {
                return [
                    <div className="topscoresnames">
                   <h4> {score.score} - {score.name} </h4>
                   </div>
                ]
            
                })}
                </div>
            </div>

        </div>    
    )


}

export default Scoreboard