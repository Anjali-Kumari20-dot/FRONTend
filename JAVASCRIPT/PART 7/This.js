// THIS KEYWORD
// "This" keyword refers to an object that is executing the current piece of code.
const student = {
    name : "Anjali",
    age : 20,
    eng : 95,
    math : 98,
    phy : 99,
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got average marks: ${avg}`);
    }
};