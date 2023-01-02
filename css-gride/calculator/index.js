// let display=document.getElementById('show');
// const Display=(n)=>{
//     display.value+=n;
// }

const input = document.getElementById("input");
const inputbox = document.getElementById("inputbox");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const deletee = document.getElementById("delete");

console.log(input);
input.addEventListener("click", clickHandler);
function clickHandler(e) {
  inputbox.value = inputbox.value + e.target.innerText;
}

equal.addEventListener("click", (e) => {
  e.stopPropagation();
  const result = eval(inputbox.value);
  inputbox.value = result;
});

clear.addEventListener("click", (e) => {
  e.stopPropagation();

  inputbox.value = "";
});

deletee.addEventListener("click", (e) => {
  e.stopPropagation();

  inputbox.value = inputbox.value.slice(0,-1)
});
