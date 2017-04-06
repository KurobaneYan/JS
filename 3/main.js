var storageModule = (function() {
    if (typeof(Storage) !== 'undefined') {
        return {
            add: function (array) {
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    var key = Object.keys(item)[0];
                    this.set(key, item[key]);
                }
            },
            clear: function() {
                localStorage.clear();
            },
            get: function(key) {
                try {
                    return JSON.parse(localStorage.getItem(key));
                }
                catch(err) {
                    return localStorage.getItem(key);
                }
            },
            getAll: function () {
                var tmp = [];
                for (var key in localStorage) {
                    var obj = {};
                    obj[key] = this.get(key);
                    tmp.push(obj);
                }
                return tmp;
            },
            remove: function(key) {
                localStorage.removeItem(key);
            },
            set: function(key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        };
    } else {
        return;
    }
})();


storageModule.set('hi', 'Hello World!');
storageModule.add([{array: [1,2,3]}, {object: {smth: '25'}}, {string: 'Call me later.'}, {25:25}]);

console.log(storageModule.get('object'));
console.log(storageModule.getAll());

storageModule.remove('string');

console.log(storageModule.getAll());
storageModule.clear();
