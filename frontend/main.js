document.getElementById("load_btn").addEventListener("click", () => {
  fetch("http://localhost:3306/load")
    .then(res => res.text())
    .then(data => alert(data));
});