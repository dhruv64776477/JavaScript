const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const SagaWalk = {
    name: 'Nishant ki mummy',
    price: 250,
    isAvailable: true,

    orderSagaWalk: function(){
        console.log("nhi Dagi");
    }
}

console.log(Object.getOwnPropertyDescriptor(SagaWalk, "name"));

console.log("\nAfter Defining the properties\n");

Object.defineProperty(SagaWalk, 'name', {
    writable: false,
    enumerable: false,
    configurable:false
    
})

console.log(Object.getOwnPropertyDescriptor(SagaWalk, "name"));

for (let [key, value] of Object.entries(SagaWalk)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}