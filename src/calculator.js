(function (root) {
    const Calculator = {
        add(a, b) { return Number(a) + Number(b); },
        sub(a, b) { return Number(a) - Number(b); },
        mul(a, b) { return Number(a) * Number(b); },
        div(a, b) {
            const denom = Number(b);
            if (denom === 0) throw new Error('DivisionByZero');
            return Number(a) / denom;
        },
        pow(a, b) { return Math.pow(Number(a), Number(b)); },
        evaluate(a, op, b) {
            switch (op) {
                case '+': return this.add(a, b);
                case '-': return this.sub(a, b);
                case '*': return this.mul(a, b);
                case '/': return this.div(a, b);
                case '^': return this.pow(a, b);
                default: throw new Error('UnknownOp:' + op);
            }
        }
    };


    // Export para Node (Jest) e para browser
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Calculator;
    } else {
        root.Calculator = Calculator;
    }
})(typeof window !== 'undefined' ? window : globalThis);