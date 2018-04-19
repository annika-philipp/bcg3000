import React from 'react'

const Display = ({question}) => {

    return (
      <div>
        <div className="screen">
          <div className="question">
            <h3>{question.question}</h3>
          </div> 
        </div>
        <div>   
          <button className="startbutton">{question.answers[0]}</button>
          <button className="startbutton">{question.answers[1]}</button>
        </div>
      </div>
    )
  }


export default Display