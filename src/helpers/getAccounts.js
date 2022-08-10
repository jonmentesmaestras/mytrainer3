
/* 	

Copyright 2013-2018 AITECH SOFTWARE CORPORATION, INC., all rights reserved

		Name:	getAccounts.jsx
		Author:	Luis carlos rodriguez
		Date:	julio-07-2022
		Desc:	

		*****	Revision History

		By: 
		Date: 
		Desc: .

 */




const getAccounts =  async () => {

    const url = "http://localhost/REV22/SiTS.WWW_REV22/deploy/enterprise/calculator-app/src/helpers/accounts.json";
    const res = await fetch(url);
    const  accounts = await res.json() 
    return accounts;


}

export default getAccounts;