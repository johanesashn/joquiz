import React from "react"
import { useNavigate } from "react-router-dom"

let category = ""
function Home(){
    const navigate = useNavigate()
    function startGame(){
        if (category != ""){
            navigate('/exam')
        }
    }
    
    function handleChange(event){
        category = event.target.value
    }

    return (
        <div className="home">
            <img className="blob-home first" src="./assets/blob1.png" alt="" />
            {/* <img className="blob-home second" src="./assets/blob1.png" alt="" /> */}
            <img className="blob-home third" src="./assets/blob1.png" alt="" />
            <img className="blob-home four" src="./assets/blob1.png" alt="" />
            <img className="blob-home five" src="./assets/blob1.png" alt="" />
            <img className="blob-home six" src="./assets/blob1.png" alt="" />
            <img className="blob-home seven" src="./assets/blob1.png" alt="" />
            <img className="blob-home eight" src="./assets/blob1.png" alt="" />
            {/* <img className="blob-home nine" src="./assets/blob1.png" alt="" /> */}
            <img className="blob-home ten" src="./assets/blob1.png" alt="" />
            <div className="home-container">
                <div className="header">
                    {/* <h1 className="title-joquiz">JOQUIZ</h1> */}
                    <img className="title-logo" src="./assets/logo.png" alt="" />
                    <p className="description">The best website for quiz</p>
                </div>
                <div className="buttons">

                    <select 
                        onChange={handleChange}
                        name="category"
                        className="select custom-btn btn-shining"
                    >
                        <option value="">Select Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                    <button 
                        className="start-quiz custom-btn btn-shining"
                        onClick={() => startGame()}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    )
}

function getCategory(){
    return category
}

function getSubject(){
    switch(category){
        case "9": 
            return "General Knowledge"
            break
        case "10": 
            return "Entertaiment: Books"
            break
        case "11": 
            return "Entertaiment: Film"
            break
        case "12": 
            return "Entertaiment: Music"
            break
        case "13": 
            return "Entertaiment: Musicals & Theaters"
            break
        case "14": 
            return "Entertaiment: Television"
            break
        case "15": 
            return "Entertaiment: Video Games"
            break
        case "16" : 
            return "Entertaiment: Board Games"
            break
        case "17" : 
            return "Science & Nature"
            break
        case "18" : 
            return "Science: Computers"
            break
        case "19" : 
            return "Science: Mathematics"
            break
        case "20" : 
            return "Mythology"
            break
        case "21" : 
            return "Sports"
            break
        case "22" : 
            return "Geography"
            break
        case "23" : 
            return "History"
            break
        case "24" : 
            return "Politics"
            break
        case "25" : 
            return "Art"
            break
        case "26" : 
            return "Celebrities"
            break
        case "27" : 
            return "Animals"
            break
        case "28" : 
            return "Vehicles"
            break
        case "29" : 
            return "Entertaiment: Comics"
            break
        case "30" : 
            return "Science: Gadgets"
            break
        case "31" : 
            return "Entertainment: Japanese Anime & Manga"
            break
        case "32" :
            return "Entertainment: Cartoon & Animations"
            break
    }
}

export {
    Home, 
    getCategory,
    getSubject
}