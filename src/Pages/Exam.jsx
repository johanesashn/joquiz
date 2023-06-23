import React from "react"
import {nanoid} from "nanoid"
import Question from "../components/Question"
import {getCategory, getSubject} from "./Home"

export default function Exam(){
    const [questions, setQuestions] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [checked, setChecked] = React.useState(false)
    const [correct, setCorrect] = React.useState(0)
    const [submit, setSubmit] = React.useState(false)

    const categoryNumber = getCategory()

    function shuffleArray(arr, element){
        const random = Math.floor(Math.random() * 3)

        if(!arr.includes(element)){
            arr.splice(random, 0, element)
        }

        return arr
    }

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=easy`)
            .then(resp => resp.json())
            .then(data => setQuestions(data.results.map(result => ({
                question: result.question,
                correct: result.correct_answer,
                answers: shuffleArray(result.incorrect_answers, result.correct_answer),
                selected: null,
                id: nanoid(),
                checked: false
            }))))
    }, [count])

    function handleClickAnswer(id, answer){
        setQuestions(prevQuestions => prevQuestions.map(question => (
            question.id === id ? {...question, selected: answer} : question
        )))
    }

    function handleChecked(){
        let selected = true
        questions.forEach(question => {
            if (question.selected === null){
                selected = false
                return
            }
        })

        if (!selected){
            setSubmit(true)
            return
        }

        setSubmit(false)

        setQuestions(prevQuestions => prevQuestions.map(question => ({
            ...question, 
            checked: true
        })))
        setChecked(true)

        let correct = 0
        questions.forEach(question => {
            if (question.selected === question.correct){
                correct += 1
            }
        })
        setCorrect(correct)
    }

    function handlePlayAgain(){
        setCount(count => count + 1)
        setChecked(false)
    }

    const questionElements = questions.map((question, index) => (
        <Question 
            key = {question.id}
            question = {question}
            number = {index + 1}
            handleClickAnswer = {handleClickAnswer}
        />
    ))

    return (
        <div className="exam-container">
            <div className="exam-loader">
                <img src="./assets/wheel.png" alt="" />
                <h1>Quizzical</h1>
            </div>
            <div className="exam">
                <img className="blob first" src="./assets/blob1.png" alt="" />
                <img className="blob second" src="./assets/blob1.png" alt="" />
                <h1 className="category">{getSubject()}</h1>
                {questionElements}
                {submit && <span className="warning">You must fill the option !!!</span>}
                <div className="bottom">
                    {checked && <h3 className="score">You are scored {correct}/10 correct answers</h3>}
                    <button className="check-answers" onClick={checked ? handlePlayAgain : handleChecked}>{checked ? "Play Again" : "Check Anwers"}</button>
                </div>
            </div>
        </div>
    )
}