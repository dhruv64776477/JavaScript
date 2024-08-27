function outerFunction() {
   let outerVar = "I'm from the outer scope";

   function innerFunction() {
       console.log(outerVar); // Can access outerVar
   }

   innerFunction();
}

outerFunction();

function outerFunction() {
    let counter = 0; // `counter` is in the lexical scope of `innerFunction`

    function innerFunction() {
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const increment = outerFunction();

increment(); 
increment(); 
increment(); 
