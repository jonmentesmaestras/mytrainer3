/* 	
Copyright 2013-2022 AITECH SOFTWARE CORPORATION, INC., all rights reserved

		Name:	storeReducer.js
		Author:	Luis carlos rodriguez
		Date:	julio-07-2022
		Desc:	

		*****	Revision History


 */


import type from "./type";

const  initialStore = {

    formCalculator : {
        account: "",
        predictedResponse: "",
        predictedSettlement: "",
        averageDebt: "",
        averageSettlement: "",
        averagePayment: "",
      },      
      calculateResult :{
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
}

const   initialCleaner = {
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

const storeReducer = (state,action) => {

    switch (action.type) {

        case type.onChange: 
            return{
                ...state,
                formCalculator:{
                    ...state.formCalculator,
                    [action.payload.name]:action.payload.value
                }
            } 

        case type.onSubmit: 
            return{
            ...state,
            calculateResult:action.payload                    
            }  

        case type.calculatingResult:   
            return{
            ...state,
            calculateResult:{
                ...state.calculateResult,
                [action.payload.name]:action.payload.value
            }
        }   

        case type.cleaningResult:{
            return{
                ...state,
                calculateResult:{
                    ...state.calculateResult ,
                    ...initialCleaner                     
                }
            } 
        }   
                                 
        default:
            return state
    }

}

export {initialStore}
export default storeReducer;