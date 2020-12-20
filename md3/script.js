var app = new Vue({
    el: "#app",
    data: {
        minValue: 1,
        maxValue: 100,
        fizzValue: 3,
        buzzValue: 5,
        arrayValues: []

    },
    methods: {
        generate: function(){
            this.arrayValues = this.logic(this.minValue,this.maxValue);
        },
        logic: function(min,max){
            var array = [];
            j = 0;
            for (let i = min; i <= max; i++) {
                
                if (i % this.fizzValue == 0 && i % this.buzzValue == 0) {
                    array[j] = {
                        id: i,
                        class: "fizzbuzz",
                        value: "FizzBuzz"
                    } 
                } else if (i % this.fizzValue == 0){
                    array[j] = {
                        id: i,
                        class: "fizz",
                        value: "Fizz"
                    } 
                } else if (i % this.buzzValue == 0){
                    array[j] = {
                        id: i,
                        class: "buzz",
                        value: "Buzz"
                    } 
                } else {
                    array[j] = {
                        id: i,
                        class: "numbers",
                        value: i
                    }
                }
               
                j++;
                
            }
            
            return array;
        },
        clear: function() {
            this.arrayValues = [];
        }

    }

})
