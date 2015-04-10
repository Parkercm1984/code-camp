// 1 
var userName = ["Josh Soileau"];
var userAddress = ["145 Willy Wonka Dr."];
var accountNumber = 0;
var accountOpenDate = ["October 21, 1929"]; 
var accountBalance = [100];

// 2
var printAccountInfo  = function(userNumber) {
  console.log("Welcome back, " + userName[userNumber] + ".");
  console.log("Are you still at " + userAddress[userNumber] + "?");
  console.log("Your account number is " + accountNumber[userNumber] + ".");
  console.log("It looks like you opened your account on " + accountOpenDate[userNumber] + ", ouch, bad timing.");
  console.log("Your current balance is " + accountBalance[userNumber] + ".");
};

// 3
var setBalance = function( newBalance, userNumber ) {
  accountBalance[userNumber] = newBalance.toFixed(2);
  // global accountBalance variable is overridden by the parameter
  // Ex:
  //    setBalance( 123 );
  //    ^ will set the balance to 123, regardless of it's current value
  printAccountInfo();
}

// 4
var withdraw = function( amountToWithdraw ) {
  setBalance( accountBalance - amountToWithdraw );
  
  // amountToWithdraw parameter is subtracted from acountBalance, and saved 
  // back into accountBalance - using the setBalance function.
  // Ex:
  //    withdraw( 10 );
  //    ^ assuming our balance was 123, this would decrease it to 113.
}
var deposit = function( amountToDeposit ) {
  setBalance( accountBalance + amountToDeposit );
  
  // amountToWithdraw parameter is added from acountBalance, and saved 
  // back into accountBalance - using the setBalance function.
  // Ex:
  //    deposit( 10 );
  //    ^ assuming our balance was 123, this would decrease it to 133.
}

// 5
var setAddress = function( newAddress ) {
  userAddress = newAddress;
  // global userAddress variable is overridden by the parameter
  // Ex:
  //    setAddress( "145 Williman St" );
  //    ^ will set the address to "145 Williman St", regardless of it's current value
  printAccountInfo();
}

// 6
var giveInterest = function() {
  setBalance( accountBalance * 1.03 );
  
  // change the accountBalance by increasing it by 3% - calling the setBalance function
  // Ex:
  //    giveInterest();
  //    ^ assuming our current balance is 100, calling giveInterest() will increase
  //	  it to 103.
}

// 7
var predictBalance = function( numYearsToPredict ) {
  var numDaysToPredict = numYearsToPredict * 365;
  var i;
  var pretendBalance = accountBalance;
  
  for( i=0; i<numDaysToPredict; i++ ) {
    pretendBalance = pretendBalance * 1.03;
  }
  
  return pretendBalance.toFixed(2);
}

var predictBalanceWhile = function( numYearsToPredict ) {
  var numDaysToPredict = numYearsToPredict * 365;
  var pretendBalance = accountBalance;
  
  var i = 0;
  while( i < numDaysToPredict ) {
    pretendBalance = pretendBalance * 1.03;
    i++;
  }
  
  return pretendBalance;
  
}



// For Extra Credit - change the logic to enable multiple users

// The way we would accomplish this would be to change the global 
// variables we have created to be arrays instead of just individual 
// items.

// So, userName would change from 
// 	userName = "Bob";
// to
// 	userName = ["Bob", "Josh", "Jamie"]

// and accountBalance would change from
//     accountBalance = 0.01;
// to
//     accountBalance = [0.01, 134.50, 86753.09];

// Then, we would have 3 customers instead of 1.

// After that, we'd have to change our functions to all only ever change the 
// value of these variables in one spot of the array.

// For example, if we wanted to change Bob's balance, we know that he is 
// customer number 0 (because the first spot in the array is 0),
// so we could change his balance by saying userBalance[0] = 0.02;

// If we wanted to change Jamie's balance, we would say userBalance[2] = 86.75;





