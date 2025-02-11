const student = {
    name: "Anjali",
    marks: 99,
    prop: this, // global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
};

// const a = 5; // global scope