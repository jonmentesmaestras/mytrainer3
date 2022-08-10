/* 	

Copyright 2013-2022 AITECH SOFTWARE CORPORATION, INC., all rights reserved

		Name:	App.js
		Author:	Luis carlos rodriguez
		Date:	  julio-07-2022
		Desc:	

		*****	Revision History

		By: 
		Date: 
		Desc: .

 */

import CalculatorForm from "./components/CalculatorForm";
import StoreProvider from "./store/StoreProvider";


function App() {
  return (
    
	<StoreProvider >
  		<CalculatorForm/>
	</StoreProvider>
      
    
  );
}

export default App;
