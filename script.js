function withdraw() {
    var pin = document.getElementById("pin").value;
    var amount = document.getElementById("amount").value;
  
    // Perform withdrawal logic here
    // ...
  
    document.getElementById("result").textContent = "Withdrawal of $" + amount + " successful.";
  }
  
  function deposit() {
    var pin = document.getElementById("pin").value;
    var amount = document.getElementById("amount").value;
  
    // Perform deposit logic here
    // ...
  
    document.getElementById("result").textContent = "Deposit of $" + amount + " successful.";
  }
  
  function checkBalance() {
    var pin = document.getElementById("pin").value;
  
    // Perform balance checking logic here
    // ...
  
    document.getElementById("result").textContent = "Your balance is $1000.";
  }
  
