// event handler

// function hello() {
//   alert("This is dangerous thing");
// }

const button = document.getElementById("button");

function hello() {
  alert("This is dangerous thing");
}

button.addEventListener("click", hello);
