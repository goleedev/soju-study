document.getElementById("modal").style.display = "none";

document.getElementById("addItem").onclick = function () {
  document.getElementById("modal").style.display = "block";
};

document.getElementById("closeModal").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
