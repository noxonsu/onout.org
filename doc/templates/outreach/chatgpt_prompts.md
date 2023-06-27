```SELECT address FROM `erc20contracts` WHERE `status` != -1 AND ai_site = '' ORDER BY `dateadd` ASC LIMIT 4```

find website and ticker (short name of token) for this erc20 smart contracts:

0xd6b633d61db6cac1bb84f0268ed444fc53bf503b
0xb1c5c764fa1d81c72f8dca2f635e51f996c142b1
0x1d11d75a9856ae6c552038ecd45bc33a8d266708
0x579ac36f1088640d5a9a39cf2a42558089bcfb3d

return SLQ query: update erc20contracts set ai_site = 'website starts https:// or not_found' , ai_ticker='ticker or not_found' where address = 'address of the contract'   . if you have not found set "not_found"  sql 

return only sql code in one block. 
