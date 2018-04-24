import React from 'react'
import Scoreboard from './Scoreboard'

import {addScoreApi} from '../api'

class AddScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            score: this.props.totalscore,
            isTopScore: this.props.isTopScore,
            // scoreboard: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.addScore = this.addScore.bind(this)
        // this.showScoreboard = this.showScoreboard.bind(this)
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showScoreboard() {
        this.setState({
            scoreboard: true
        })
    }

    addScore (e) {
        addScoreApi(this.state, this.props.refreshScores)
    }

    render () {
        console.log("Topscore? ", this.props.isTopScore)
        return (
        <div>
        <div className="welcome">
            <h3>Well done!</h3>
            <h3>Deploy yourself into phase 3</h3> 
            <p>Your totalscore is: {this.state.score}</p>
            {this.props.isTopScore
            ? <form onSubmit={this.addScore}>
            <p>Add your name to the scoreboard</p>
            <input placeholder='Player' name='name' onChange={this.handleChange} value={this.state.name} />
            <input type='submit' value='Submit'/>
            </form>
            : <div className='row'>  
            <button onClick={this.props.resetGame} className="button">Play again</button>
            </div>}
            {this.props.topScores.length > 0 && <Scoreboard topScores={this.props.topScores}/>}
            {/* {this.state.showScoreboard && <Scoreboard topScores={this.props.topScores}/>} */}
            {/* {this.props.topScores.length > 0 && <Scoreboard topScores={this.props.topScores}/>} */}
           
        </div>
    </div> 


)


    }
}

export default AddScore