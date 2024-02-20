import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const superheroes = [
    {
      name: "Batman",
      powers: ["Rich", "Fly", "Genius"],
      address: {
        street: "Gotham St",
        city: "Gotham",
        country: "USA",
      },
      age: 21,
      isBachelor: true,
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/poster/7/d/g/batman-portrait-bt455566-medium-original-imaekp86fhb3fhxf.jpeg",
    },
    {
      name: "Superman",
      powers: ["Laser Fry", "Fly", "Runs Fast"],
      address: {
        street: "Central St",
        city: "New York",
        country: "USA",
      },
      age: 41,
      isBachelor: false,
      imageUrl:
        "https://c8.alamy.com/comp/2R7EMM0/portrait-of-a-drawing-of-superman-superhero-warner-dc-and-comics-concept-2R7EMM0.jpg",
    },
  ];
  return (
   <div style={{display:'flex'}}>
   
       {
 
       superheroes.map(e =>(
       <div style={{margin:'10px',padding:'30px',border:'2px solid red'}}>
        <p>Name : {e.name}</p>

        {
          e.powers.map(p=>(
           
            <p>Power 1 :{p}</p>
            
          ))
        }

        <p>Address : {`${e.address.street}   ${e.address.city}   ${e.address.country}` }</p>
        <p>Age : {e.age}</p>
        <p>Married status :{e.isBachelor?'Married':'unmarried'}</p>
        <img src={e.imageUrl} style={{width:'120px'}} alt="" />
        </div>
       ))
      
       }
   
   </div>
  )
}

export default App
