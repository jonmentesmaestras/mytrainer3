/* 	
Copyright 2013-2022 AITECH SOFTWARE CORPORATION, INC., all rights reserved

		Name:	useOperations.js
		Author:	Luis carlos rodriguez
		Date:	julio-07-2022
		Desc:	

		*****	Revision History

		By:     Jon Mosquera
		Date:   July-12-2022
		Desc:   Translate error messages to English

 */

import { useState } from "react";

let msgForm =""

const  useOperations = () => {
    const [error, setError] = useState(true);
    const executeOperation = (operacion, num1, num2) => {

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operacion) {
            case "mult":    
                return num1 * num2              
            case "div":
                return num1 / num2     
            case "rest":                
                return num1 - num2
            default:
                break;
        }

    }// fin calculatorOperation

    const calculatorFormValidation = ( form ) => {

        const {
            account,
            predictedResponse,
            predictedSettlement,
            averageDebt,
            averageSettlement,
            averagePayment
          } = form

          if( account.trim() === "" ||
            predictedResponse.trim()   === ""||
            predictedSettlement.trim()  === "" ||
            averageDebt.trim()  === "" ||
            averageSettlement.trim()   === "" ||
            averagePayment.trim()  === "" ){                        
              msgError("All Fields are Required")
              return true
          }

          return false
       
    }// fin validationForm

    const hanldleChangueFormValidation = (form) => {
   
        const {        
          predictedResponse,
          predictedSettlement,
          averageDebt,
          averageSettlement,
          averagePayment
        } = form  
        if (       
          predictedResponse && parseFloat(predictedResponse) <10  || parseFloat(predictedResponse) > 100  ||
          predictedSettlement && parseFloat(predictedSettlement) <10  || parseFloat(predictedSettlement) > 100  ||
          averageSettlement && parseFloat(averageSettlement) <10  || parseFloat(averageSettlement) > 100  
        ) {
        msgError("Type numbers between 10 and 100")
        setError(true)
        return 
      }else{
        setError(false)
      }
      if (averageDebt < 1000 && averageDebt) {
        
        msgError("Average Debt must be equal or greater than $1,000.00")
        setError(true)
        return 
      }else{
        setError(false)
      }
      if ( parseFloat(averagePayment)> 60 ) {
        
        msgError("Terms must be between 1 to 60 months")
        setError(true)
        return 
      }else{
        setError(false)
      }
      const regSoloNumDolar = /^\$(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{1,2})?$/    
      if ((!regSoloNumDolar.test(averageDebt) && averageDebt) ) {
      
        msgError("Type only numbers")
        setError(true)
        return true
      }else{
        setError(false)
      }  
      const regSoloNum = /^[1-9]+[0-9]*$/
      if((!regSoloNum.test(averagePayment) && averagePayment)){
     
        msgError("Type only numbers")
        
        return true
      }else{
        setError(false)
      }
   
    }

    const msgError = (msg) => {
      msgForm = msg;
    }// fin msgError

    return [ 
      setError,
        error,
        msgForm,
        executeOperation,
        calculatorFormValidation,
        hanldleChangueFormValidation
    ]

}

export default useOperations;