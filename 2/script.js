function filterArray(array, filter) {
    var used = [];
    var output = [];
    for (var i = 0; i < array.length; i++) {
        var tmp = {};
        for (var j = 0; j < filter.length; j++) {
            tmp[filter[j]] = array[i][filter[j]];
        }
        tmp = JSON.stringify(tmp);
        
        if (used.indexOf(tmp) === -1) {
            used.push(tmp); 
            output.push(array[i]);
        }
    }
    return output;
}

var test = [{a:1,b:1,c:1}, {a:1,b:1}, {a:2}, {a:1,b:2}];
var array = [{ a: 1, b: 1, c: 1 }, { a: 1, b: 2, c:2 }, { a: 54, c: 1 }, { a: 2, b: 2 }, { a: 2, b: 4, c: 2 }];

console.log(filterArray(test, ['a']));
console.log(filterArray(test, ['b']));
console.log(filterArray(test, ['a', 'b']));

console.log(filterArray(array, ['a', 'b']));

function thirdLeastItem(array) {
    if (array.length < 3) {
        return;
    }
    var out = [];

    if (array[1] > array[0]) {
        out[0] = array[0];
        out[1] = array[1];
    } else {
        out[1] = array[0];
        out[0] = array[1];
    }

    if (array[2] < out[0]) {
        out[2] = out[1];
        out[1] = out[0];
        out[0] = array[2];
    } else if (array[2] > out[1]) {
        out.push(array[2]);
    } else {
        out[2] = out[1];
        out[1] = array[2];
    }

    if (array.length > 3) {
        for (var i = 3; i < array.length; i++) {
            if (array[i] < out[0]) {
                out[2] = out[1];
                out[1] = out[0];
                out[0] = array[i];
            } else if (array[i] < out[1]) {
                out[2] = out[1];
                out[1] = array[i];
            } else if (array[i] < out[2]) {
                out[2] = array[i];
            }
        }
    }

    return out[2];
}

var t1 = [1, 5, 3, 6];
var t2 = [5, 6, 3, 4, 5];
var t3 = [6, 3, 7, 1, 0, 9, 4];
//console.log(thirdLeastItem(t1));
//console.log(thirdLeastItem(t2));
console.log(thirdLeastItem(t3));

