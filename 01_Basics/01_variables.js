const accountId = 195893
let accountEmail = "prince9070@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur";
let accounState;

//accountId = 2  // not allowed
accountEmail = " hfbeh@.com"
accountCity = "bengaluru"
accountPassword = "2121212"

/*
Prefer not to use var 
because of issuse in block scope and functional scope 
  let -  */
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accounState])