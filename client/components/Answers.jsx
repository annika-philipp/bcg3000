import React from 'react'

const Answers = ({answers}) => {
    return (
        <div className="answers">
        <button>{answers[0]}</button>
        <button>{answers[1]}</button>
        </div>
    )
}
export default Answers
