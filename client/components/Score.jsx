import React from 'react'
import AddScore from './AddScore'
import TopScores from './TopScores'



class Score extends React.Component {

  render() {

    return (
      <div className='finalScore'>
        <h1>Your final score: {this.props.score}</h1>
        {/* {this.props.topScore && TopScores /}  */}
        {this.props.isTopScore ? <AddScore score={this.props.score} refreshScores={this.props.refreshScores} /> : <TopScores topScores={this.props.topScores} />}
        <button style={style} className="playAgain" onClick={this.props.startGame}> Play again! </button>
      </div>
    )
  }
}



export default Score