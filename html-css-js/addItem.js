function addItem(status, image, content) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
          <img src="${image}" alt="${content}" />
          <span>${status}</span>
          <span>${content}</span>
      `;
  document.querySelector("#container").appendChild(div);
}

function addItemHandle(e) {
  e.preventDefault();
  const image = document.getElementById("image").value;
  const status = document.getElementById("status").value;
  const content = document.getElementById("content").value;
  addItem(status, image, content);
  closeModal();
}

document
  .getElementById("addItemForm")
  .addEventListener("submit", addItemHandle);
