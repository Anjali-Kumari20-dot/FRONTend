let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.dir(form);


    // alert("Form Submitted");

    // let input = document.querySelector("input");
    // console.log(input);
    // console.dir(input);
    // console.log(input.value);

    // let user = document.querySelector("#user");
    // let password = document.querySelector("#pass");

    let user = this.elements[0]; // form.elements[0]
    let password = this.elements[1];
    
    console.log(user.value);
    console.log(password.value);

    alert(`Hi ${user.value} 😊, your password is set to ${password.value}`);

});