
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const Welcome = () => {
    return (<div className="container">
                <div className="welcome">
                    <div className="welcometext">
                        <h2>Welcome to 6 weeks</h2>
                        <h2>of fun(ctions)</h2> 
                    </div>
                </div>    
                <Link to = {'/bcg3000'}><button className="button">Start Game</button></Link>
            </div>    

    )



}

export default Welcome