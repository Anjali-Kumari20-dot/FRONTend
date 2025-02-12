const student = {
    name: "Anjali",
    marks: 99,
    prop: this, // global scope
    getName: function () {
        console.log(this); 
        return this.name;
    },
    getName: () => {
        console.log(this); // parent's scope -> window
        return this.name;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); // student
        },2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); // student
        },2000);
    }
};

// const a = 5; // global scope