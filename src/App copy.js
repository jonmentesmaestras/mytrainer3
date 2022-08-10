import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import SimpsonsDisplay from './components/Users/SimpsonsDisplay';

function App() {
  const [usersList, setUserList] = useState([])
  const [simpsonCharacter, setSimpsonCharacter] = useState([])
  
  //let quoteFromSimpson = ""

  const addUserHandler = (uName, uAge, simpsonAPI) => {
    setUserList( (prevUsersList) => {
        return[...prevUsersList, {name: uName, age: uAge}]
      }
    )

    console.log("el valor simpsonAPI " + JSON.stringify(simpsonAPI))

    

    setSimpsonCharacter(simpsonAPI)  

  }

  return (
    <div>
      
      <SimpsonsDisplay simpsonQuote = {simpsonCharacter} />
      <AddUser onAddUser={addUserHandler} />
     
    </div>
    
  );
}

export default App;
