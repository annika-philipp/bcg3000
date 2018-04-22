
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const PlayAgain = ({resetGame, handleChange}) => {
    return (<div className="container">
                <div className="welcome">
                    <h3>Well done!</h3>
                    <h3>Deploy yourself into phase 3</h3> 
                </div>
                <form>
                    <p>Add your name to the leaderboard></p>
                    <input placeholder='Player' name='player' onChange={handleChange} value={this.state.player} />
                </form>
                <div className='row'>  
                    <button onClick={resetGame} className="button">Play again</button>
                </div>
            </div>    

    )



}

export default PlayAgain