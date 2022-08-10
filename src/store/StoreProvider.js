/* 	
Copyright 2013-2022 AITECH SOFTWARE CORPORATION, INC., all rights reserved

		Name:	StoreProvider.js
		Author:	Luis carlos rodriguez
		Date:	julio-07-2022
		Desc:	

		*****	Revision History


 */

import  React,{ createContext, useContext, useReducer }  from 'react'
import storeReducer, { initialStore } from './storeReducer';

const StoreContext = createContext();

const StoreProvider = ({children} ) => {

    const [ store, dispatch] = useReducer(storeReducer,initialStore)


        return (
            <StoreContext.Provider value={[ store, dispatch]}>
                {children}
            </StoreContext.Provider>
        )

}


const   useStore = () => useContext(StoreContext)[0];
const   useDispatch = () => useContext(StoreContext)[1];


export {StoreContext,useStore,useDispatch}
export default StoreProvider;
