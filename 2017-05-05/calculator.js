define(function(require) {
    function Calculator() {};

    Calculator.prototype.multyply = (a, b) => a * b; 

    //return (a, b) => a + b;
    
    return new Calculator();
});
