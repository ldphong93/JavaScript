function add(value){
    const addNext = function(nextValue){
        return add(value + nextValue);
    };

    addNext.toString = function() {
        return value;
    }

    return addNext;
}

const result = add(1)(2)
console.log("" + result) // 3

const result2 = add(1)(2)(3)(4)(5)
console.log("" + result2) // 15
