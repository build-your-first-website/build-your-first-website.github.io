function sayHello() {
  document.getElementById("message").textContent = "Hello! The button works.";
}

document.getElementById("greet").addEventListener("click", sayHello);
