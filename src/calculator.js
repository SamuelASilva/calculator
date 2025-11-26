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

        evaluate(op, a, b) {
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

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Calculator;
    }

    try {
        if (typeof root !== 'undefined' && root) {
            root.Calculator = Calculator;
        }
    } catch (e) {}
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
