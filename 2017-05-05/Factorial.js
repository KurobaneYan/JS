module.exports = {
    calculate: n => {
        let fact = 1;
        for (let i = 1; i < n; i++) {
            fact = fact * i;
        }
        return fact;
    }
};
