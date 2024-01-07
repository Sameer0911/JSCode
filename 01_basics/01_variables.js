const accountId = 123987;
let accountEmail = "sameer@gmail.com";
var accountPassword = "121212";
accountCity = "Panipat";

console.log(accountId);

// Error hai Assignment to constant variable
// accountId = 456456;
// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

accountEmail = "sk@gmail.com";
accountPassword = "989898";
accountCity = "Hyderabad";
console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var because of block scope and functional scope.
*/