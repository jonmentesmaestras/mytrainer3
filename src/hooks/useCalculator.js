/* 	
Copyright 2013-2022 AITECH SOFTWARE CORPORATION, INC., all rights reserved

		Name:	useCalculator.js
		Author:	Luis carlos rodriguez
		Date:	julio-07-2022
		Desc:	

		*****	Revision History

 */

import {   useCallback, useEffect } from "react";
import { useDispatch, useStore } from "../store/StoreProvider";
import  type  from '../store/type';
import useOperations from "./useOperations";
 
    

const  objResul ={
  account: "",
  connections: "",
  settlements: "",
  totalSettlementDebt: "",
  totalSettlementAmount: "",
  monthlyGrossRevenue: "",
  monthlyNetRevenue: "",
  monthlyGrossRevenuePerSettlement: "",
  monthlyNetRevenuePerSettlement: "",
  totalCost: "",
  costPerAccount: "",
  costPerSettlement: ""
}
            
let nameInput = "";

const useCalculator = () => {
  const store = useStore()
  const dispatch = useDispatch()
  const { formCalculator ,calculateResult}  =  store;
  const [setError, error, msgForm, executeOperation,  calculatorFormValidation , hanldleChangueFormValidation ]  = useOperations(); 

  const handleChangeForm = (e) =>{
    const { name,  value  } = e.target;
    dispatch({ 
        type: type.onChange,
        payload:{ name,  value  }
      }) 
      
      nameInput = name;
  
  }
   
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    let isError =  calculatorFormValidation(formCalculator)
    setError(isError)      
    if(!isError){ 
      handleCalculator()
    }else{
      saveCalculationResult("","",false,true)
    }

  }
  
  const  saveCalculationResult = (name,value , changeSubmit=false , cleaner=false) => {
    
     if(changeSubmit){
         dispatch({ 
          type: type.onSubmit,
          payload:value      
        }) 
        return
     }

     dispatch({ 
      type: type.calculatingResult,
      payload:{ name,  value  }
    }) 

     if(cleaner){ 
         dispatch({ 
          type: type.cleaningResult        
        }) 
        return
     }

  }

  const handleCalculator =  (  ) => {

      let accountForm = formCalculator.account.split(',');
      let result = 0;
      /* Cost per Account */
      objResul.account = accountForm[0];
      /* Cost per Account */
      objResul.connections = executeOperation("mult", formCalculator.account, formCalculator.predictedResponse / 100)

      /* Cost per Account */
      objResul.settlements = executeOperation("mult", objResul.connections, formCalculator.predictedSettlement / 100)
                 
      /* Cost per Account */
      let numstring = formCalculator.averageDebt.replace("$", "")    
      numstring = numstring.replace(",", "")    
      objResul.totalSettlementDebt = executeOperation("mult", objResul.settlements, numstring)
                
      /* Cost per Account */     
      result = executeOperation("mult", objResul.totalSettlementDebt, formCalculator.averageSettlement)
      result = result/100
      objResul.totalSettlementAmount = result;
               
      /* Cost per Account */     
      objResul.monthlyGrossRevenue = executeOperation("div", objResul.totalSettlementAmount, formCalculator.averagePayment)
              
      /* Cost per Account */
      if (objResul.account) {
        objResul.costPerAccount =  accountForm[1];
      }
      /* Total Cost */
      if (objResul.costPerAccount !=""  ) {
        objResul.totalCost = executeOperation("mult", objResul.account, objResul.costPerAccount)
       
      }
      /* Cost per Settlement */
      if (objResul.totalCost  && objResul.settlements) {
        objResul.costPerSettlement = executeOperation("div", objResul.totalCost, objResul.settlements)  
       
      }
      /* Monthly Gross Revenue Per Settlement */
      if(objResul.monthlyGrossRevenue){
        objResul.monthlyGrossRevenuePerSettlement = executeOperation("div", objResul.monthlyGrossRevenue, objResul.settlements)
     
      } 
      /* Monthly Net Revenue */
      if(objResul.monthlyGrossRevenue){
        objResul.monthlyNetRevenue = executeOperation("rest", objResul.monthlyGrossRevenue, objResul.totalCost)   
      }
      /* Monthly Net Revenue Per Settlement */
      if (objResul.monthlyNetRevenue !="") { 
        objResul.monthlyNetRevenuePerSettlement = executeOperation("div", objResul.monthlyNetRevenue,  objResul.settlements)      
      }
      
      saveCalculationResult("",objResul,true)

  }

useEffect( () => {
  hanldleChangueFormValidation(formCalculator)
  nameInput = ""
} ,[nameInput])

  return [
  handleChangeForm,
  handleSubmit,
  formCalculator,
  calculateResult,
  error,
  msgForm
  ];

};

export default useCalculator;
            