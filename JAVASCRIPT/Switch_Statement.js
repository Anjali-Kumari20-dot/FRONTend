// alert("Something is wrong!");
let color = prompt("Enter the color: ");
switch(color){
    case "red" :
        console.log("STOP");
        break;
    case "yellow" :
        console.log("SLOW DOWN");
        break;
    case "green" :
        console.log("GO");
        break;
    default:
        console.log("BROKEN LIGHT");
}