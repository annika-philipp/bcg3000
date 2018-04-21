
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const Welcome = ({startGame}) => {
    return (<div className="container">
                <div className="welcome">
                    <h3>Welcome to 6 weeks</h3>
                    <h3>of fun(ctions)</h3> 
                </div>  
                <div className='row'>  
                {/* <Link to = {'/bcg3000'}><button className="startbutton">Start Game</button></Link> */}
                <button onClick={startGame} className="startbutton">Start Game</button>
                </div>
            </div>    

    )



}

export default Welcome