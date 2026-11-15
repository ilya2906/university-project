
const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const faculty = document.getElementById("faculty").value;
  const file = document.getElementById("document").files[0];

  console.log("ФИО:", name);
  console.log("Email:", email);
  console.log("Факультет:", faculty);
  console.log("Документ:", file.name);

  alert("Форма успешно проверена!");
});
