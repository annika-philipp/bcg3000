import React from 'react'


// stateful as well

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //stuff like questions: '',
            //questionID: 1,
            //answer1: ,
            //answer2: /
            //or answers: [] ?
        }

        //this = this .bind(this)
    }

    //render Questions?

    //render Answers?

    //click buttons?

    render(){
        return (
            <div key={this.state.questionID}>
                <Questions question={which question} id={which id /}>
                <Answer answers={which answers} />
            </div>    
        )

    }
 

}


export default Board
