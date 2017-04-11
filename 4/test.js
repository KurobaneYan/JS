// Immediately Invoked Function Expression
// (function() {})()
for (var i = 0; i < 5; i++) {
    (function(j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);
}

// var or let and const

// or we can create block visiability scope
for (let k = 0; k < 5; k++) {
    setTimeout(function timer() {
        console.log(k);
    }, k * 1000);
}
