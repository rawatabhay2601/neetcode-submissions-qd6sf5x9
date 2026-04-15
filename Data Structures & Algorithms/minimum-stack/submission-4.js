class MinStack {

    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (!this.min.length || this.min[this.min.length - 1] >= val) this.min.push(val);
        return this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if (!this.stack.length) return null;
        const val = this.stack.pop();

        if ( this.min[this.min.length - 1] == val ) this.min.pop();
        return val;
    }

    /**
     * @return {number}
     */
    top() {
        if ( !this.stack.length ) return null;
        else return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.min.length == 0) return null;
        else return this.min[this.min.length - 1];
    }
}