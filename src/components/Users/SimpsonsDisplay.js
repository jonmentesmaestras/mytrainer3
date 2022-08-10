import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const SimpsonsDisplay = props => {



    
    console.log("el string de props simpsonQuote es " +  props.simpsonQuote) 
    
   

    

 
    return(
        <Card className={classes.users}>
            
                    { props.simpsonQuote.map((simpsonChar) => (
                        <div id="pd1" >
                            <center>                
                                <h1>{simpsonChar.character}</h1> 
                                <p>{simpsonChar.quote}</p>
                                <img src={simpsonChar.image}></img>
                             </center>

                        </div>
                
                        
                    ))}


                    
                

        </Card>
    )

}


export default SimpsonsDisplay