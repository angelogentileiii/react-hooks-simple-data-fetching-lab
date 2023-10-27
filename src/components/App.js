// create your App component here
import React, {useState, useEffect} from "react";

function App() {

    const [dogData, setDogData] = useState([])
    const [contentLoaded, setContentLoaded] = useState(false) 

    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setDogData(data)
            setContentLoaded(true)
            console.log(dogData)
        })
    }, [])

    if (!contentLoaded){
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div>
            <img src={dogData.message} alt="A Random Dog"></img>
        </div>
    )
}

export default App