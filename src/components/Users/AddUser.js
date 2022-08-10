import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card'
import classes from './AddUser.module.css'


const AddUser = props =>{
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    //const [gotJson, setGotJson] = useState();
    let simpsonData = ""

    async function fetchSimpsonQuote() {
      let response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1');
      simpsonData = await response.json();
      
      props.onAddUser(enteredUserName, enteredAge,simpsonData )
     }

    const userNameChangeHandler = (event) =>  {

      

        setEnteredUserName(event.target.value);
        
      };
    
      const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
       
      };    

    const addUserHandler = (event) => {
        event.preventDefault();

        

       // console.log(enteredUserName + " " + enteredAge)
       fetchSimpsonQuote()

      

      
        setEnteredUserName('')
        setEnteredAge('')

        
        
    }

    

return(
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
           
            
            <Button type="Submit">Add User</Button>

        </form>
    </Card>    
)
}

export default AddUser;





 

