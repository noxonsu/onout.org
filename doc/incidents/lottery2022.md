
1. We use pancakeswap lottery contract (this contract is safety)
2. We attached this contract + all related contracts and libraries to the "deploy" button in admin panel (where client create and start a lottery) 
3. For reducing gas fees for our clients (for running a lottery) we compile all these contracts into one. 
4. This means all the code deploys to one address and all the libraries has access to this address. 
5. When user do "token approve" transaction, he allows for this address to spend ALL the tokens from his personal address. (read more about https://brogna.medium.com/token-allowance-dc553f7d38b3 ) then lottery withdraw tokens from user's address when user buys tickets.
6. One of the external libraries called "multicall" which has the way to execute external code (from any address who call this function). 
7. Sad bad true, the developer skipped deep research of this library because it's not required by our developer guidelines. He saw only to that function which uses by the lottery contract, and this function is safe. 
8. Hacker executes the function with command "withdraw allowed tokens and send me". 
9. Every user who did the approval (5) on their address lose tokens. And of course first who test the lottery was admin of this lottery :( who has a lot of tokens on his address. 
