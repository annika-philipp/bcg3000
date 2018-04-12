import React from 'react'

const Score = (props) => {
    return 
        <div className="score">
            {props.score.value}
        </div>
}
// not 100% sure if this is sufficient - come back to this later
export default Score