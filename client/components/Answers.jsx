import React from 'react'

const Answers = ({answers}) => {
    return (
        <div className="answers">
        <button className="button">{answers[0]}</button>
        <button className="button">{answers[1]}</button>
        </div>
    )
}
export default Answers
