
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const GameOver = () => {
    return (<div className="container">
                <div className="welcome">
                    <div className="welcometext">
                        <h2>GAME OVER</h2>
                        <h2>Consult your nearest handbook...</h2> 
                    </div>
                </div>  
                <div className='welcomebuttonspace'>  
                <Link to = {'/bcg3000'}><button className="startbutton">Play again</button></Link>
                </div>
            </div>    

    )



}

export default GameOver