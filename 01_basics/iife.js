// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // has semicolon importance

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
