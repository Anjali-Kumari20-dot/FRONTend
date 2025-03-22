let form = document.querySelector("form");

form.addEventListener("submit", function (event)  {
  // console.log(event);
  event.preventDefault();
  console.dir(form);
  // console.log("Form Submitted");
  let input = this.elements[0]; // document.querySelector('input'); / form.elements[0]
  let inp = input.value;
  document.querySelector("body").append(inp);
});

