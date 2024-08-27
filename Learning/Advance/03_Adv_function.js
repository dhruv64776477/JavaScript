// 1. setInterval - Repeats a function every 1 second
let intervalId = setInterval(() => {
   console.log("This message is logged every 1 second.");
}, 1000);

// 2. setTimeout - Executes a function after 5 seconds
const timeoutId = setTimeout(() => {
   console.log("This message is logged after 5 seconds.");
}, 5000);

// 3. clearInterval - Stops the interval after 10 seconds
setTimeout(() => {
   clearInterval(intervalId);
   console.log("Interval cleared after 10 seconds.");
}, 10000);

// Stop the interval after 5 seconds
setTimeout(() => {
   clearInterval(intervalId);
   console.log("Interval cleared after 5 seconds.");

   // Restart the interval after 3 seconds
   setTimeout(() => {
       intervalId = setInterval(() => {
           console.log("Interval restarted. This message is logged every 1 second.");
       }, 1000);
   }, 3000); // Restart after 3 seconds

}, 5000);

// 5. setImmediate - Executes a function immediately after the current event loop
setImmediate(() => {
   console.log("Executed immediately after the current event loop.");
});

//  6. requestAnimationFrame - Syncs an animation with the browser's refresh rate
// let startTime = null;

// function animate(timestamp) {
//    if (!startTime) startTime = timestamp;
//    const progress = timestamp - startTime;

//    console.log(`Animating... ${progress.toFixed(2)} ms elapsed`);

//    if (progress < 2000) { // Stops the animation after 2 seconds
//        requestAnimationFrame(animate);
//    } else {
//        console.log("Animation completed.");
//    }
// }

// // Start the animation
// requestAnimationFrame(animate);