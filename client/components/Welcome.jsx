
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const Welcome = () => {
    return (<div className="container">
                <div className="welcome">
                    <h3>Welcome to 6 weeks</h3>
                    <h3>of fun(ctions)</h3> 
                </div>  
                <div className='row'>  
                <Link to = {'/bcg3000'}><button className="startbutton">Start Game</button></Link>
                </div>
            </div>    

    )



}

export default Welcome