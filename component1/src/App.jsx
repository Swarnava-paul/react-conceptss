import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <User name={'swarnava'} age={20} email={'swarnavapaul108@gmail.com'}/>
     <ScoreCard score={98}/>
    </>
  )
}
function User({name,age,email}){
 return(
  <>
  <p>Name : {name}</p>
  <p>Age : {age}</p>
  <p>email : {email}</p>
  </>
 )
}

function ScoreCard({score}){
  return(
    <>
    <p>Score is : {score}</p>
    </>
  )
}
export default App
