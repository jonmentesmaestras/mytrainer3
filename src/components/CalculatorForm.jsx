/* 	

Copyright 2013-2022 AITECH SOFTWARE CORPORATION, INC., all rights reserved

		Name:	CalculatorForm.jsx
		Author:	Luis carlos rodriguez
		Date:	julio-07-2022
		Desc:	

		*****	Revision History

		By: 
		Date: 
		Desc: .

 */


/* import useCalculator from '../hooks/useCalculator'; */
import './CalculatorForm.css'
import Display from './Display';
import PintarError from './PintarError';
import NumberFormat from 'react-number-format';

import useCalculator from '../hooks/useCalculator';



const CalculatorForm = ( ) => {


  
  const [ handleChangeForm , handleSubmit, formCalculator , calculateResult , error, msgForm ] = useCalculator()

    





    return( 
        <>

            <main className='block-main'>
               
 
                <form className='block-form' onSubmit={handleSubmit} >
            
                   <section className='divRequired'>
                            <p  className='required'>Please Enter The Fields Below (All Fields are Required)</p>
                   </section>
                    <h1> Monthly Business Parameters  </h1>
                    
                    <div>
                        <label className="label">Accounts *</label> 
                        <select
                        className="form-control mb-2"
                        name="account"             
                        onChange={handleChangeForm}  
                        value={formCalculator.account}       
                        >                  
                            <option value="">Select</option>
                            <option value="500,2.50">500</option>
                            <option value="1000,2.45">1000</option>
                            <option value="2000,2.45">2000</option>
                            <option value="3000,2.45">3000</option>
                            <option value="4000,2.45">4000</option>
                            <option value="5000,2.40">5000</option>
                            <option value="6000,2.40">6000</option>
                            <option value="7000,2.40">7000</option>
                            <option value="8000,2.40">8000</option>
                            <option value="9000,2.40">9000</option>
                            <option value="10000,2.35">10000</option>
                        </select>


                    </div>
                    <div>
                        <label className="label">Predicted % Response (Avg 45%) *</label> 
                        <input
                            className="form-control mb-2"
                            type="text"                            
                            name="predictedResponse"  
                            pattern="^[1-9][0-9]?$|^100$"
                            onChange={handleChangeForm}                   
                            value={ formCalculator.predictedResponse}                      
                        />
                       <span>%</span> 
                    </div>
                    <div>
                        <label className="label">Predicted % Settlement Agreement *</label> 
                        <input
                            className="form-control mb-2"
                            type="text"                           
                            name="predictedSettlement"                     
                            onChange={handleChangeForm}     
                            value={ formCalculator.predictedSettlement}               
                        />
                        <span>%</span> 
                    </div>
                    <div>
                        <label className="label">Average Debt *</label> 
                        <NumberFormat 
                          name="averageDebt"
                          onChange={handleChangeForm}  
                          value={formCalculator.averageDebt}    
                          thousandSeparator={true} 
                          prefix={'$'} 
                        />
                        <span>$</span> 
                    </div>
                    <div>
                        <label className="label">Average Settlement %  *</label> 
                        <input
                            className="form-control mb-2"
                            type="text"                          
                            name="averageSettlement"                    
                            onChange={handleChangeForm}   
                            value={ formCalculator.averageSettlement}                    
                        />
                         <span>%</span> 
                    </div>
                    <div>
                        <label className="label">Average Payment Term (Months) *</label> 
                        <input
                            className="form-control mb-2"
                            type="text"                           
                            name="averagePayment"                      
                            onChange={handleChangeForm} 
                            value={ formCalculator.averagePayment}                      
                        />
                         <span>#</span> 
                    </div>
                    <div className='divBtn'>
                        <button type="submit">
                        Calculate
                        </button>
                    </div>
                    {
                        
                        error &&   <PintarError msg = {msgForm}/>
                    }
                </form>
              <Display calculateResult ={calculateResult}/>  

            </main>          

        </>
    )

}


export default CalculatorForm;