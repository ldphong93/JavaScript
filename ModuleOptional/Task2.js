
String.prototype.myCustomContat  = function(otherString){
    return this + " my " + otherString;
};

const result = 'hello'.myCustomContat('world')
console.log(result) // hello my world

const result2 = 'I got'.myCustomContat('new phone')
console.log(result2) // I got my new phone