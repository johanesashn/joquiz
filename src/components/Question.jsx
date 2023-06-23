import {nanoid} from "nanoid"

export default function Question(props){
    let answers = props.question.answers
    let checked = props.question.checked

    function handleClick(answer){
        if (checked){
            return
        }
        props.handleClickAnswer(props.question.id, answer)
    }

    let url = "correct"
    const answersElement = answers.map(answer => {
        let id = null

        if (checked){
            if (props.question.correct === answer){
                id = "correct"
            } else if (props.question.selected === answer){
                id = "incorrect"
                url = "false"
            } else {
                id = "not-selected"
            }        
        }

        return <button 
            id={id}
            className={props.question.selected === answer ? "answer selected" : "choice"}
            key={nanoid()}
            onClick={() => handleClick(answer)}
        >
            {/* using dangerouslySetInnerHTML for preventing symbols like %copy displayed instead of symbol of copyright */}
            <span dangerouslySetInnerHTML={{ __html: answer}} />
        </button>
    })

    return (
        <div className="container">
            <div className="content">
                <div className="questions-container">
                    {/* use this (because there are symbols*/}
                    <h3 dangerouslySetInnerHTML={{ __html: props.number + ". " + props.question.question }} />
                    {/* instead of this */}
                    {/* <h3>{props.number + ". " + props.question.question}</h3> */}
                    <div className="choices">
                        {answersElement}
                    </div>
                </div>
                {checked && <img className="result" src={`./assets/${url}.png`} alt="" />}
            </div>
            <div className="line"></div>
        </div>
    )
}