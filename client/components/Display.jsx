import React from 'react'

const Display = ({question, updateIndex, totalscore}) => {

  
    return (
      <div>
        <div className="score">
        <h2>score: {totalscore}</h2>
        </div>
        <div className="screen">
          <div className="question">
            <h3>{question.question}</h3>
          </div> 
        </div>
        <div>   
        <button onClick={() => updateIndex(question.scores[0])} value='button1' className="startbutton">{question.answers[0]}</button>
        <button onClick={() => updateIndex(question.scores[1])} value="button2" className="startbutton">{question.answers[1]}</button>
        </div>
      </div>
    )
  }


export default Display