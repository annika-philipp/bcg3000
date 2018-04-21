
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const PlayAgain = ({resetGame}) => {
    return (<div className="container">
                <div className="welcome">
                    <h3>Well done!</h3>
                    <h3>Deploy yourself into phase 3</h3> 
                </div>
                <div className='row'>  
                    <button onClick={resetGame} className="startbutton">Play again</button>
                </div>
            </div>    

    )



}

export default PlayAgain