import React from 'react'

const Answers = ({answers}) => {
    return (
        <div className="answers">
        <button className="startbutton">{answers[0]}</button>
        <button className="startbutton">{answers[1]}</button>
        </div>
    )
}
export default Answers
