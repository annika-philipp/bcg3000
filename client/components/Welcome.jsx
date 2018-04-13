
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const Welcome = () => {
    return (
            <div className="Welcome">
                <h2>Welcome</h2>
                <h2>to</h2>
                <h2>6 weeks</h2>
                <h2>of</h2>
                <h2>fun(ctions)</h2> 
                <Link to = {'/bcg3000'}><button type='button'>Start Game</button></Link>
            </div>    

    )



}

export default Welcome