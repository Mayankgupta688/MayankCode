// Context is Object reference invoking the function....

// Caller of the function...

// Execution context

var a = `100`;

function abc() {
    var a = 30;
    console.log(this.a)
    console.log(a)
}

abc();

var output = 400;

function calculator() {
    var output = 0;

    function add(input) {
        console.log(this.output)
    }

    return {
        add: add,
        output: output
    }
}

var myCalc = calculator()
myCalc.add();

var myFunc = myCalc.add;
myFunc()