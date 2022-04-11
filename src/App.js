
import './App.css';
import { useState } from 'react';
import ShowQuotes from "./component/ShowQuotes";
import axios from 'axios';


const simpsons = [
  {
    "quote": "By chilling my loins I increase the chances of impregnating my wife.",
    "character": "Apu Nahasapeemapetilon",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    "characterDirection": "Left"
    }
]



function App() {

  const [persoSimpsons, setPersoSimpsons] = useState(simpsons)

  const clickToChange = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setPersoSimpsons(data);
      });
  }

  return (
    <div className="App">
      
 <ShowQuotes simpsons={persoSimpsons}/>
 <button type='button' onClick={clickToChange} id="btn">click to change</button>
    </div>
  );
}

export default App;
