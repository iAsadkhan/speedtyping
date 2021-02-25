import React , {useState,useEffect} from 'react'
import './speedtyping.css'

function Speedtyping()
{
    const STARTING_TIME = 60
    const [word, wordcount] = useState("")
    const [time, timer]=useState(STARTING_TIME)
    const [gamestart,gameIsStarted] = useState(false)
    const[finalAnswer,setFinalAnswer]=useState(0)

   function handlechange(e)
    {
      const {value}=e.target
      wordcount(value)
    }

    function countword(word) {
        const wordsArr = word.trim().split(" ")
        const fil= wordsArr.filter(text => text!=="")
        return fil.length
    } 

    function startGame() {
        gameIsStarted(true)
        timer(STARTING_TIME)
        wordcount("")
    }
    
    function endGame() {
        gameIsStarted(false)
        setFinalAnswer(countword(word))
    }
    
        useEffect(() => {
            if( gamestart && time > 0) {
                setTimeout(() => {
                    timer(time => time - 1)
                }, 1000)
            }
            
            else if(time=== 0) {
              endGame()
            }
        }, [time,gamestart] )

   

    return(
        <>
        <div className="header" >
           <h1>Speed typing</h1>
        </div>
            <textarea className="area"
            value={word}
            onChange={handlechange}
            disabled={!gamestart}>

            </textarea>

            <h4 className="time">Remaining Time {time}</h4>
            
            <button className="button" 
            onClick={startGame}
            disabled={gamestart}
            >Start</button>

            <h1>Word count {finalAnswer} </h1>
</>
    )
    }
export default Speedtyping

