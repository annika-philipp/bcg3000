import React from 'react'

const Display = ({question, updateIndex}) => {

  

    return (
      <div>
        {/* <div className="score">
        <h2>score: {totalscore}</h2>
        </div> */}
        <div className="screen">
          <div className="question">
            <h3>{question.question}</h3>
          </div> 
        </div>
        <div>   
          <button onClick={updateIndex} className="startbutton">{question.answers[0]}{question.scores[0]}</button>
          <button onClick={updateIndex} className="startbutton">{question.answers[1]}{question.scores[1]}</button>
        </div>
      </div>
    )
  }


export default Display