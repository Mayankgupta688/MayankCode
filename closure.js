var a = 10;

function abc() {
    console.log(a);
}

    function calculator() {
        var output = 0;

        function add(input) {
            output = output + input;
            return output
        }

        return {
            add: add
        }
    }

var myCalculator = calculator();
myCalculator.add(10)