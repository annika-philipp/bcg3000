import React from 'react'

import {addScore} from '../api'

class AddScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            score: this.props.score
        }
        this.handleChange = this.handleChange.bind(this)
        this.addScore = this.addScore.bind(this)
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addScore (e) {
        this.addScore(this.state, this.props.finishAdd)
    }

    render () {
        return (
        <div className="container">
        <div className="welcome">
            <h3>Well done!</h3>
            <h3>Deploy yourself into phase 3</h3> 
            <form onSubmit={this.addScore}>
            <p>Your totalscore is: {this.props.totalscore}</p>
            {/* this is where I need to check if the totalscore is high enough, only display is true */}
            <p>Add your name to the scoreboard</p>
                <input placeholder='Player' name='name' onChange={this.handleChange} value={this.state.name} />
            <input type='submit' value='Submit'/>
        </form>
        </div>
        <div className='row'>  
            <button onClick={this.props.resetGame} className="button">Play again</button>
        </div>
    </div> 


)


    }
}

export default AddScore