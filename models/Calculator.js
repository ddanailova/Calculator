function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;

    this.calculateResult = function () {
        let result = 0;

        switch (this.operator) {
            case "+":
                result = this.leftOperand + this.rightOperand;
                break;
            case "-":
                result = this.leftOperand - this.rightOperand;
                break;
            case "*":
                result = this.leftOperand * this.rightOperand;
                break;
            case "/":
                result = this.leftOperand / this.rightOperand;
                break;
            case "%":
                result = this.leftOperand * (this.rightOperand / 100);
                break;
            case "#": {
                if (this.rightOperand < 2 || this.rightOperand > 36) {
                    result = "Number system range: [2, 36]";
                }
                else {
                    result = this.leftOperand.toString(this.rightOperand);
                }
            }
                break;
        }
        return result;
    }
}

module.exports = Calculator;