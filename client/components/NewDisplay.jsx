import React from 'react'

class NewDisplay extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            totalscore: 0,
        }
        this.updateScore = this.updateScore.bind(this)
    }

    updateScore() {
        console.log('Hello')
        if(button.value == "answer1") {
            this.totalscore += this.question.scores[0]
        } else {
            this.totalscore += this.question.scores[1] 
        }

        const totalscore =this.state.totalscore

    }



    render() {
        return (
            <div>
              <div className="score">
              <h2>score: {this.totalscore}</h2>
              </div>
              <div className="screen">
                <div className="question">
                  <h3>{question.question}</h3>
                </div> 
              </div>
              <div>   
              
                <button className="startbutton" value="answer1" onClick={this.updateScore}>{question.answers[0]}</button>
                <button className="startbutton" value="answer2"  onClick={this.updateScore}>{question.answers[1]}</button>
              </div>
            </div>
          )
        }
      
   
}