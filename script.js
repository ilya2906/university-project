
const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("Заявка от " + name + " принята!");
});
