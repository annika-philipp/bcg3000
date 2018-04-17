
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const PlayAgain = () => {
    return (<div className="container">
                <div className="welcome">
                    <div className="welcometext">
                        <h2>Well done!</h2>
                        <h2>Deploy yourself into phase 3</h2> 
                    </div>
                </div>  
                <div className='welcomebuttonspace'>  
                <Link to = {'/bcg3000'}><button className="startbutton">Play again</button></Link>
                </div>
            </div>    

    )



}

export default PlayAgain