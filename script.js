setTimeout(()=>{
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3"); 
            setTimeout(() => {
                console.log("4"); 
                setTimeout(() => {
                    console.log("5");
                    setTimeout(() => {
                        console.log("6"); 
                        setTimeout(() => {
                            console.log("7");   
                        }, 7000); 
                    }, 6000); 
                }, 5000);
            }, 4000); 
        }, 3000);
        
    }, 2000);
}, 1000 );

function printNumbersWithDelay() {
    let number = 1;
  
    function printNumber() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(number);
          resolve();
        }, number * 1000);
      });
    }
  
    function printNextNumber() {
      if (number <= 7) {
        printNumber()
          .then(() => {
            number++;
            printNextNumber();
          });
      }
    }
  
    printNextNumber();
  }
  
  printNumbersWithDelay();

