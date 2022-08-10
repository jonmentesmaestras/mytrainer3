/* 	

Copyright 2013-2022 AITECH SOFTWARE CORPORATION, INC., all rights reserved

		Name:	Display.jsx
		Author:	Luis carlos rodriguez
		Date:	julio-07-2022
		Desc:	

		*****	Revision History

		By: 
		Date: 
		Desc: .

 */


import NumberFormat from 'react-number-format';

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
        

const Display = ( { calculateResult }  ) => {

  
    const formatNumber =  numero  => {  
        //   return  parseInt(numero).toLocaleString('en')
       // return  new Intl.NumberFormat('es-MX').format(numero)

       //  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

       return numero;
      }
      



    return(
            <div className="divResul">
                <section className='block-section'> 
                       <h1 className="titleBusiness">Monthly Business</h1>
                    <article className='block-article'>
                        <div>
                                Accounts
                        </div>
                        <div>
                            {                        
                                calculateResult.account && <span> { calculateResult.account} </span>
                                
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                                Connections
                        </div>
                        <div>
                            {
                                calculateResult.connections && <span> { calculateResult.connections} </span>
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                            Settlements
                        </div>
                        <div>
                            {
                                calculateResult.settlements && <span> { calculateResult.settlements} </span>
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                            Booked Total Settlement Debt
                        </div>
                        <div>
                            {
                                calculateResult.totalSettlementDebt && <span> <NumberFormat value={calculateResult.totalSettlementDebt} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                            Booked Total Settlement Amount
                        </div>
                        <div>
                            {
                               calculateResult.totalSettlementAmount && <span> <NumberFormat value={calculateResult.totalSettlementAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                                Monthly Gross Revenue
                        </div>
                        <div>
                            {
                                calculateResult.monthlyGrossRevenue && <span> <NumberFormat value={round(calculateResult.monthlyGrossRevenue, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                                Monthly Net Revenue
                        </div>
                        <div>
                            {
                                calculateResult.monthlyNetRevenue && <span> <NumberFormat value={round(calculateResult.monthlyNetRevenue, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                            Monthly Gross Revenue Per Settlement
                        </div>
                        <div>
                            {
                                calculateResult.monthlyGrossRevenuePerSettlement && <span> <NumberFormat value={round(calculateResult.monthlyGrossRevenuePerSettlement, 2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                            Monthly Net Revenue Per Settlement
                        </div>
                        <div>
                            {
                                calculateResult.monthlyNetRevenuePerSettlement && <span> <NumberFormat value={round(calculateResult.monthlyNetRevenuePerSettlement, 2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>

                </section>



                <section className='block-section'> 

                    <h1 className="titleConnect">  Monthly Cost of Connect & Collect </h1>
                   

                    <article className='block-article'>
                        <div>
                                    Total Cost
                        </div>
                        <div>
                            {
                                calculateResult.totalCost && <span> <NumberFormat value={round(calculateResult.totalCost, 0)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>

                    <article className='block-article'>
                        <div>
                            Cost per Account
                        </div>
                        <div>
                            {
                                calculateResult.costPerAccount && <span> <NumberFormat value={round(calculateResult.costPerAccount, 2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>
                    <article className='block-article'>
                        <div>
                            Cost per Settlement
                        </div>
                        <div>
                            {
                                calculateResult.costPerSettlement && <span> <NumberFormat value={round(calculateResult.costPerSettlement, 2)} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </span>
                            }
                        </div>

                    </article>

                </section>


            </div>
    )

}


export default Display