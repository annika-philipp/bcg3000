import React from 'react'

const Scoreboard = ({topScores}) => {
    return (
        <div className="container">
            <div className="welcome">
                <h3>Top Scores</h3>
                {this.props.topScores.map(score => {
                return [
                   <h3> {score.score} - {score.name} </h3>
                ]
            
                })}
            </div>

        </div>    
    )


}

export default Scoreboard